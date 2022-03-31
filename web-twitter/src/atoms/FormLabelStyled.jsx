import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

export const FormLabelStyled = ({ text, htmlFor, ...rest }) => {
	return (
		<Form.Label htmlFor={htmlFor} {...rest}>
			{text}
		</Form.Label>
	);
};

FormLabelStyled.propTypes = {
	text: PropTypes.string,
	htmlFor: PropTypes.string,
	rest: PropTypes.object,
};

export default FormLabelStyled;
