import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export const ButtonStyled = ({ text, ...rest }) => {
	return <Button {...rest}>{text}</Button>;
};

ButtonStyled.propTypes = {
	text: PropTypes.string,
	rest: PropTypes.object,
};

export default ButtonStyled;
