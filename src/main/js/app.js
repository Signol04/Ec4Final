const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const PageHome = require('./pages/home');
const PageVerDeporte = require('./pages/ver-deporte');
const PageNuevoDeporte = require('./pages/nuevo-deporte');
const PageNuevoDeportista = require('./pages/nuevo-deportista');
const PageEditarDeportista = require('./pages/editar-deportista');
const PageEditarDeporte = require('./pages/editar-deporte');
const PageVerParticipante = require('./pages/ver-participante');
const PageNuevoParticipante = require('./pages/nuevo-participante');

const router = createBrowserRouter([
	{ path: '/', element: <PageHome /> },
	{ path: '/ver-deporte/:id', element: <PageVerDeporte /> },
	{ path: '/nuevo-deporte', element: <PageNuevoDeporte /> },
	{ path: '/nuevo-deportista', element: <PageNuevoDeportista /> },
	{ path: '/editar-deportista/:id', element: <PageEditarDeportista /> },
	{ path: '/editar-deporte/:id', element: <PageEditarDeporte /> },
	{ path: '/ver-participante/:id', element: <PageVerParticipante /> },
	{ path: '/ver-participante/:id/nuevo-participante', element: <PageNuevoParticipante /> }
]);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
);

