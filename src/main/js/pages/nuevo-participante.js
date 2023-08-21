const React = require('react');
const { useState, useEffect } = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const PageNuevoParticipante = () => {

    let { id } = useParams();
    const [deportistas, setDeportistas] = useState([]);
    const [elementos, setElementos] = useState([]);
    const [idDeportista, setIdDeportista] = useState('');
    const [idElemento, setIdElemento] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/participantes',
            entity: {
                deporte: 'http://localhost:8080/api/deportes/' + id,
                deportista: 'http://localhost:8080/api/deportistas/' + idDeportista,
                elemento: 'http://localhost:8080/api/elementos/' + idElemento
            },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    };

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/deportistas'
        }).done(response => {
            let deportistasList = [];
            response.entity._embedded.deportistas.map(deportista => {
                deportistasList.push({
                    value: deportista._links.self.href.split('/').slice(-1),
                    label: deportista.nombre
                });
            });
            setDeportistas(deportistasList);
        });

        client({
            method: 'GET',
            path: '/api/elementos'
        }).done(response => {
            let elementosList = [];
            response.entity._embedded.elementos.map(elemento => {
                elementosList.push({
                    value: elemento._links.self.href.split('/').slice(-1),
                    label: elemento.nombre
                });
            });
            setElementos(elementosList);
        });
    }, []);

    return (
        <>
            <h1>Nuevo Participante</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="deportista">Deportista</label>
                <select
                    name="deportista"
                    id="deportista"
                    onChange={(e) => {
                        setIdDeportista(e.target.value);
                    }}
                >
                    {deportistas.map((deportista) => {
                        return (
                            <option key={deportista.value} value={deportista.value}>
                                {deportista.label}
                            </option>
                        );
                    })}
                </select>

                <label>Elemento</label>
                <select
                    name="elemento"
                    id="elemento"
                    onChange={(e) => {
                        setIdElemento(e.target.value);
                    }}
                >
                    {elementos.map((elemento) => {
                        return (
                            <option key={elemento.value} value={elemento.value}>
                                {elemento.label}
                            </option>
                        );
                    })}
                </select>

                <input type="submit" value="Nuevo Participante" />
            </form>
            <Link to="/">Volver</Link>
        </>
    );
};

module.exports = PageNuevoParticipante;
