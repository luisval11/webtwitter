import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "../../atoms/ButtonStyled";
import "./style.css";

export const UserItem = ({ id, name, isFollowed, onClickAction }) => {
	return (
		<div className="user">
			<span>{name}</span>
			<ButtonStyled
				onClick={(e) => {
					e.stopPropagation();
					onClickAction && onClickAction(id);
				}}
				variant={isFollowed ? "secondary" : "primary"}
				text={isFollowed ? "Unfollow" : "Follow"}
			/>
		</div>
	);
};

UserItem.propTypes = {
	id: PropTypes.any,
	name: PropTypes.string.isRequired,
	isFollowed: PropTypes.bool.isRequired,
	onClickAction: PropTypes.func,
};

export default UserItem;
