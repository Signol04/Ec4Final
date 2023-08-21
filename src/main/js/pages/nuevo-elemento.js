import React, { useState } from 'react';
import client from '../client';
import { Link } from 'react-router-dom';

const PageNuevoElementoDeporte = () => {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/elementosdeporte',
            entity: { nombre: nombre, categoria: categoria, descripcion: descripcion },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    };

    return (
        <>
            <h1>Nuevo Elemento de Deporte</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    onChange={(e) => setNombre(e.target.value)}
                />
                <br />
                <label htmlFor="categoria">Categoría</label>
                <input
                    type="text"
                    id="categoria"
                    name="categoria"
                    onChange={(e) => setCategoria(e.target.value)}
                />
                <br />
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                    cols={30}
                    id="descripcion"
                    name="descripcion"
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <br />
                <br />
                <input type="submit" value="Nuevo Elemento de Deporte" />
            </form>
            <Link to="/">Volver</Link>
        </>
    );
};

export default PageNuevoElementoDeporte;
