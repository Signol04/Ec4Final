const React = require('react');
const client = require('../client');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');

const PageVerElemento = () => {
    let { id } = useParams();
    const [elemento, setElemento] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/elementos/' + id
        }).done(response => {
            setElemento(response.entity);
        });
    }, []);

    return (
        <>
            <h1>Ver Elemento</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{elemento.nombre}</td>
                </tr>
                <tr>
                    <th>Categoría</th>
                    <td>{elemento.categoria}</td>
                </tr>
                <tr>
                    <th>Descripción</th>
                    <td>{elemento.descripcion}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerElemento;
