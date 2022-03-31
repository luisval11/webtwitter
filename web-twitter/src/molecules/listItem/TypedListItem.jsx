import React from "react";
import PropTypes from "prop-types";
import { UserItem } from "../user/UserItem";
import { PostItem } from "../post/PostItem";

export const TypedListItem = ({ type, item, onClickAction }) => {
	return (
		<>
			{type === "user" && (
				<UserItem
					id={item.id}
					name={item.name}
					isFollowed={item.isFollowed}
					onClickAction={onClickAction}
				/>
			)}
			{type === "post" && (
				<PostItem
					author={item.nameAuthor}
					content={item.content}
					createdDate={item.createdDate}
				/>
			)}
		</>
	);
};

TypedListItem.propTypes = {
	item: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired,
	onClickAction: PropTypes.func,
};

export default TypedListItem;
