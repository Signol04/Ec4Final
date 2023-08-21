const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const PageHome = require('./pages/home');
const PageVerDeporte = require('./pages/ver-deporte');
const PageNuevoDeportista = require('./pages/nuevo-deportista');
const PageEditarDeportista = require('./pages/editar-deportista');
const PageEditarDeporte = require('./pages/editar-deporte');
const PageVerParticipante = require('./pages/ver-elemento');
const PageNuevoElementoDeporte = require('./pages/nuevo-elemento');

const router = createBrowserRouter([
	{ path: '/', element: <PageHome /> },
	{ path: '/ver-deporte/:id', element: <PageVerDeporte /> },
	{ path: '/nuevo-elemento', element: <PageNuevoElementoDeporte /> },
	{ path: '/nuevo-deportista', element: <PageNuevoDeportista /> },
	{ path: '/editar-deportista/:id', element: <PageEditarDeportista /> },
	{ path: '/editar-deporte/:id', element: <PageEditarDeporte /> },
	{ path: '/ver-participante/:id', element: <PageVerParticipante /> },
	{ path: '/ver-elemento/:id/nuevo-elemento', element: <PageNuevoElementoDeporte /> }
]);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
);

