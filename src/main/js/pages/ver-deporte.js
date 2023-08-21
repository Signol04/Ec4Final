import React, { useState, useEffect } from 'react';
import client from '../client';
import { Link, useParams } from 'react-router-dom';


const PageVerDeporte = () => {
    let { id } = useParams();
    const [deporte, setDeporte] = useState({});
    const [elementosDeporte, setElementosDeporte] = useState([]);

    useEffect(() => {
        const urlDeporte = '/api/deportes/' + id;

        client({
            method: 'GET',
            path: urlDeporte
        }).done((response) => setDeporte(response.entity));

        client({
            method: 'GET',
            path: urlDeporte + '/elementosdeporte'
        }).done((response) => setElementosDeporte(response.entity));
    }, []);

    return (
        <>
            <h1>Deporte</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{deporte.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <h2>Elementos de Deporte</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Elemento</th>
                    </tr>
                </thead>
                <tbody>
                    {elementosDeporte.map((elementoDeporte) => {
                        return (
                            <tr key={elementoDeporte.id}>
                                <td>{elementoDeporte.nombre}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <hr />
            <Link to={`/ver-deporte/${id}/nuevo-elemento-deporte`}>Agregar Elemento de Deporte</Link> |  
            <Link to="/">Volver</Link>
        </>
    );
};

export default PageVerDeporte;
