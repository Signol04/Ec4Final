import React, { useState } from 'react';
import client from '../client';
import { Link } from 'react-router-dom';

const PageNuevoDeportista = () => {

    const [nombre, setNombre] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/deportistas',
            entity: { nombre: nombre },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <>
            <h1>Nuevo Deportista</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e) => setNombre(e.target.value)} />
                <input type="submit" value="Nuevo Deportista" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

export default PageNuevoDeportista;
