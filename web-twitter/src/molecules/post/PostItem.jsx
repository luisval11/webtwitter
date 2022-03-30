import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "./style.css";
import { parseDiffTime } from "../../helpers/utils/parseDiffTime";

export const PostItem = ({ author, content, createdDate }) => {
	return (
		<Card className="post">
			<Card.Body>
				<div className="post--title">
					<Card.Title className="m-0">{author}</Card.Title>
					<span>{parseDiffTime(createdDate).toString()}</span>
				</div>
				<Card.Text className="mb-0">{content}</Card.Text>
			</Card.Body>
		</Card>
	);
};

PostItem.propTypes = {
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	createdDate: PropTypes.instanceOf(Date).isRequired,
};

export default PostItem;
