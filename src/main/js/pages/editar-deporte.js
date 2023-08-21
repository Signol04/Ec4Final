import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import client from '../client';

const PageEditarDeporte = () => {
    const { id } = useParams();
    const [elementoDeporte, setElementoDeporte] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: `/api/elementosdeporte/${id}`,
            headers: { 'Content-Type': 'application/json' }
        }).done((response) => {
            setElementoDeporte(response.entity);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        client({
            method: 'PATCH',
            path: `/api/elementosdeporte/${id}`,
            headers: { 'Content-Type': 'application/json' },
            entity: elementoDeporte
        }).done(() => (window.location = '/'));
    };

    return (
        <>
            <h1>Editar Elemento de Deporte: {id}</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={elementoDeporte.nombre || ''}
                    onChange={(e) => {
                        setElementoDeporte({ ...elementoDeporte, nombre: e.target.value });
                    }}
                />
                <br />

                <label>Categoría</label>
                <input
                    type="text"
                    name="categoria"
                    value={elementoDeporte.categoria || ''}
                    onChange={(e) => {
                        setElementoDeporte({ ...elementoDeporte, categoria: e.target.value });
                    }}
                />
                <br />

                <label>Descripción</label>
                <input
                    type="text"
                    name="descripcion"
                    value={elementoDeporte.descripcion || ''}
                    onChange={(e) => {
                        setElementoDeporte({ ...elementoDeporte, descripcion: e.target.value });
                    }}
                />
                <br />

                <input type="submit" value={`Editar Elemento de Deporte ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    );
};

export default PageEditarDeporte;
