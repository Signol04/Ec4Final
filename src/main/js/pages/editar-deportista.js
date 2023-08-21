import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import client from '../client';

const PageEditarDeportista = () => {
    const { id } = useParams();
    const [deportista, setDeportista] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: `/api/deportistas/${id}`,
            headers: { 'Content-Type': 'application/json' }
        }).done((response) => {
            setDeportista(response.entity);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        client({
            method: 'PATCH',
            path: `/api/deportistas/${id}`,
            headers: { 'Content-Type': 'application/json' },
            entity: deportista
        }).done(() => (window.location = '/'));
    };

    return (
        <>
            <h1>Editar Deportista: {id}</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={deportista.nombre || ''}
                    onChange={(e) => {
                        setDeportista({ ...deportista, nombre: e.target.value });
                    }}
                />
                <br />

                <input type="submit" value={`Editar Deportista ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    );
};

export default PageEditarDeportista;
