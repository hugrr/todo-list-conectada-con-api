import React from "react";
import PropTypes from "prop-types";

const Contador = props => {
	return <p>{"Las Tareas pendientes son  " + props.datosLista.length}</p>;
};

Contador.propTypes = {
	datosLista: PropTypes.array
};

export default Contador;
