import React from "react";
import Input from "./input.js";
import Lista from "./lista.js";
import Contador from "./contador.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			datosLista: [],
			userActive: "1"
		};

		this.cambiarvalor = this.cambiarvalor.bind(this);

		this.obtenerListado = this.obtenerListado.bind(this);
	}

	cambiarvalor(valor) {
		let nuevo = this.state.datosLista;
		fetch(
			"https://3000-d0e70399-be87-4ff2-a18a-2aec5b5ae648.ws-us0.gitpod.io/api/todo/" +
				this.state.userActive,
			{
				method: "POST",
				body: JSON.stringify({
					label: valor,
					done: false,
					username: "1"
				}),
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(res => res.json())
			.then(response => this.obtenerListado());
		/*
		nuevo.push({
			label: valor,
			done: false
		});
		this.setState({
			datosLista: nuevo
		});
        */
	}
	obtenerListado() {
		fetch(
			"https://3000-d0e70399-be87-4ff2-a18a-2aec5b5ae648.ws-us0.gitpod.io/api/todo/"
		)
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				this.setState({ datosLista: data });
			});
	}
	componentDidMount() {
		/*
		fetch(
			"https://3000-d0e70399-be87-4ff2-a18a-2aec5b5ae648.ws-us0.gitpod.io/api/todo/",
			{
				method: "POST",
				body: JSON.stringify(datosLista),
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(res => res.json())
			.then(response => console.log(resp));
            */

		this.obtenerListado();
	}

	//borrar(valor) {
	//let eliminar = this.state.datosLista;
	//eliminar = eliminar.filter(item => {
	//	return item !== valor;
	//});

	//this.setState({
	//	datosLista: eliminar
	//});

	render() {
		return (
			<div className="container ">
				<div className="input ">
					<Input valor={this.cambiarvalor} />
				</div>
				<Lista
					borrar={this.borrar}
					datosLista={this.state.datosLista}
				/>
				<div className="center bg-dark ">
					<Contador datosLista={this.state.datosLista} />
				</div>
			</div>
		);
	}
}
