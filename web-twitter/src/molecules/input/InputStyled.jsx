import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { FormLabelStyled } from "../../atoms/FormLabelStyled";

export const InputStyled = ({
	index,
	className,
	handleInput,
	label,
	name,
	...rest
}) => {
	return (
		<Form.Group controlId={index} className={className}>
			{label && <FormLabelStyled htmlFor={name} text={label} />}
			<Form.Control
				id={name}
				onChange={(event) => {
					handleInput && handleInput(event);
				}}
				{...rest}
			/>
		</Form.Group>
	);
};

InputStyled.propTypes = {
	index: PropTypes.any,
	className: PropTypes.string,
	handleInput: PropTypes.func,
	label: PropTypes.string,
	name: PropTypes.string,
	rest: PropTypes.object,
};

export default InputStyled;
