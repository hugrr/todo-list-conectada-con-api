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
			datosLista: [
				{ label: "Make the bed", done: false },
				{ label: "Walk the dog", done: false },
				{ label: "Do the replits", done: false },
				{ label: "Do the replits", done: false }
			]
		};

		this.cambiarvalor = this.cambiarvalor.bind(this);
		this.borrar = this.borrar.bind(this);
	}
	cambiarvalor(valor) {
		let nuevo = this.state.datosLista;
		console.log(valor);
		nuevo.push({
			label: valor,
			done: false
		});
		this.setState({
			datosLista: nuevo
		});
	}
	borrar(valor) {
		let eliminar = this.state.datosLista;
		eliminar = eliminar.filter(item => {
			return item !== valor;
		});

		this.setState({
			datosLista: eliminar
		});
	}

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
