import React from "react";
import PropTypes from "prop-Types";

const Lista = props => {
	const li = props.datosLista.map((item, i) => {
		return (
			<div key={i}>
				<a className="list-group-item list-group-item-action ">
					{item.label}
					<a
						className="float-right text-secondary"
						onClick={() => {
							props.borrar(item);
						}}>
						<i className="fas fa-times" />
					</a>
				</a>
			</div>
		);
	});

	return <ul>{li}</ul>;
};

Lista.propTypes = {
	datosLista: PropTypes.array,

	borrar: PropTypes.func
};
export default Lista;
