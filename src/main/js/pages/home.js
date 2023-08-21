const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { deportistas: [], participantes: [], deportes: [] };
	}

	componentDidMount() {
		client({ method: 'GET', path: '/api/deportistas' }).done(response => {
			this.setState({ deportistas: response.entity._embedded.deportistas });
		});
		client({ method: 'GET', path: '/api/participantes' }).done(response => {
			this.setState({ participantes: response.entity._embedded.participantes });
		});
		client({ method: 'GET', path: '/api/deportes' }).done(response => {
			this.setState({ deportes: response.entity._embedded.deportes });
		});
	}

	render() {
		return (
			<>
				<h1>App de Deportes!</h1>

				<div style={{"width": "100%", "display": "flex"}}>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Deportistas" emoji="🏅" />
						<DeportistaList deportistas={this.state.deportistas} />
						<Link to="/nuevo-deportista">Nuevo Deportista</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Participantes" emoji="👟" />
						<ParticipanteList participantes={this.state.participantes} />
						<Link to="/nuevo-participante">Nuevo Participante</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Deportes" emoji="⚽" />
						<DeporteList deportes={this.state.deportes} />
						<Link to="/nuevo-deporte">Nuevo Deporte</Link>
					</div>
				</div>
			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado completo de {props.entidad.toLowerCase()}:</span>
			<hr />
		</>
	);
}

class DeportistaList extends React.Component {
	render() {
		const deportistas = this.props.deportistas.map(deportista =>
			<Deportista key={deportista._links.self.href} deportista={deportista} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{deportistas}
				</tbody>
			</table>
		)
	}
}

class ParticipanteList extends React.Component {
	render() {
		const participantes = this.props.participantes.map(participante =>
			<Participante key={participante._links.self.href} participante={participante} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{participantes}
				</tbody>
			</table>
		)
	}
}

class DeporteList extends React.Component {
	render() {
		const deportes = this.props.deportes.map(deporte =>
			<Deporte key={deporte._links.self.href} deporte={deporte} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{deportes}
				</tbody>
			</table>
		)
	}
}

class Deportista extends React.Component {
	render() {
		const id = this.props.deportista._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.deportista.nombre}</td>
				<td>
					<Link to={`/editar-deportista/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}

class Participante extends React.Component {
	render() {
		const id = this.props.participante._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.participante.nombre}</td>
				<td>
					<Link to={`/editar-participante/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}

class Deporte extends React.Component {
	render() {
		const id = this.props.deporte._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.deporte.nombre}</td>
				<td>
					<Link to={`/ver-deporte/${id}`}>Ver Deporte</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;
