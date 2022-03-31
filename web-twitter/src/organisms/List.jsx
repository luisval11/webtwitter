import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import { getEmptyListMessage } from "../helpers/utils/getEmptyListMessage";
import { ListItem } from "../molecules/listItem/ListItem";
import "./style.css";

export const List = ({ items, onClickItem, onClickAction, title, type }) => {
	return (
		<div className="list">
			{title && <h6>{title}</h6>}
			{items.length > 0 && (
				<ListGroup aria-labelledby={type} role="list">
					{items.map((item) => {
						return (
							<ListItem 
								key={item.id}
								type={type}
								item={item}
								onClickAction={onClickAction}
								onClickItem={onClickItem}
							/>
						);
					})}
				</ListGroup>
			)}
			{items.length === 0 && (
				<span>{getEmptyListMessage(title !== undefined ? title : null)}</span>
			)}
		</div>
	);
};

List.propTypes = {
	items: PropTypes.array.isRequired,
	title: PropTypes.string,
	type: PropTypes.string.isRequired,
	onClickAction: PropTypes.func,
	onClickItem: PropTypes.func,
};

export default List;
