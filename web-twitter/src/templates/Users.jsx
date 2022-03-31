import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";
import { UserSelectedContext } from "../contexts/UserSelectedContext";
import { List } from "../organisms/List";

export const Users = ({ hasOnClickItem, setUsers, users, title }) => {
	const { setSelectedUser } = useContext(UserSelectedContext);

	const handleClickUser = useCallback(
		(id) => {
			setSelectedUser((userSelected) => (userSelected === id ? null : id));
		},
		[setSelectedUser]
	);

	const handleOnClickAction = useCallback(
		(id) => {
			setUsers((users) =>
				users.map((user) =>
					user.id === id ? { ...user, isFollowed: !user.isFollowed } : user
				)
			);
			setSelectedUser((selectedUser) =>
				selectedUser === id ? null : selectedUser
			);
		},
		[setSelectedUser, setUsers]
	);

	return (
		<>
			<List
				items={users}
				onClickItem={hasOnClickItem ? handleClickUser : null}
				onClickAction={handleOnClickAction}
				title={title}
				type="user"
			/>
		</>
	);
};

Users.propTypes = {
	hasOnClickItem: PropTypes.bool,
	setUsers: PropTypes.func.isRequired,
	title: PropTypes.string,
	users: PropTypes.array.isRequired,
};

export default Users;
