import PropTypes from "prop-types";
import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { ButtonStyled } from "../../../atoms/ButtonStyled";
import { useForm } from "../../../hooks/useForm";
import { InputStyled } from "../../input/InputStyled";
import "./style.css";

export const AddPostForm = ({ setPosts }) => {
	const [error, setError] = useState(false);
	const [formValues, handleInputChange, reset] = useForm({
		content: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formValues.content.trim() === "") {
			setError(true);
		} else {
			setPosts((posts) => [
				{
					id: Date.now(),
					authorId: 0,
					content: formValues.content,
					createdDate: new Date(),
				},
				...posts,
			]);
			reset();
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			{error && (
				<Alert
					className="mt-2"
					variant="danger"
					onClose={() => setError(false)}
					dismissible
				>
					<Alert.Heading>An error on the form submitted</Alert.Heading>
					<p>To create a new post, add a message on the textarea</p>
				</Alert>
			)}

			<InputStyled
				role="textarea"
				as="textarea"
				className="input__textarea"
				handleInput={handleInputChange}
				label="Post a new message"
				name="content"
				value={formValues.content}
			/>
			<div className="form__button--submit">
				<ButtonStyled onClick={handleSubmit} text="Post" />
			</div>
		</Form>
	);
};

AddPostForm.propTypes = {
	setPosts: PropTypes.func.isRequired,
};

export default AddPostForm;
