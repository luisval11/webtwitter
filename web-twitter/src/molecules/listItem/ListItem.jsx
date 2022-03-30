import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ListGroupItem } from "react-bootstrap";
import { UserSelectedContext } from "../../contexts/UserSelectedContext";
import "./style.css";
import { TypedListItem } from "./TypedListItem";

export const ListItem = ({ item, type, onClickAction, onClickItem }) => {
	const { selectedUser } = useContext(UserSelectedContext);

	return (
		<ListGroupItem
			role="listitem"
			className={`list-item${
				item.id === selectedUser && type === "user"
					? " list-item--selected"
					: ""
			}`}
			onClick={() =>
				onClickItem !== undefined &&
				onClickItem !== null &&
				onClickItem(item.id)
			}
		>
			<TypedListItem item={item} onClickAction={onClickAction} type={type} />
		</ListGroupItem>
	);
};

ListItem.propTypes = {
	item: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired,
	onClickAction: PropTypes.func,
	onClickItem: PropTypes.func,
};

export default ListItem;
