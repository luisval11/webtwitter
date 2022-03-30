import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserSelectedContext } from "../contexts/UserSelectedContext";
import { DUMMY_USERS } from "../helpers/const";
import { TimelineMessages } from "../templates/TimelineMessages";
import { Users } from "../templates/Users";

export const WebTwitter = () => {
	const [selectedUser, setSelectedUser] = useState(null);

	const [users, setUsers] = useState(DUMMY_USERS);
	const [usersFollowed, setUsersFollowed] = useState([]);
	const [usersUnfollowed, setUsersUnfollowed] = useState([]);
	const [usersTimeline, setUsersTimeline] = useState([]);

	useEffect(() => {
		setUsersFollowed(
			users.filter(
				(user) => user.isFollowed === true || user.isFollowed === null
			)
		);
		setUsersUnfollowed(users.filter((user) => user.isFollowed === false));
	}, [users]);

	useEffect(() => {
		setUsersTimeline([
			...usersFollowed,
			{
				id: 0,
				name: "Me",
				isFollowed: null,
			},
		]);
	}, [usersFollowed]);

	return (
		<>
			<UserSelectedContext.Provider value={{ selectedUser, setSelectedUser }}>
				<Container fluid>
					<Row>
						<Col md={4}>
							<Users
								hasOnClickItem
								users={usersFollowed}
								setUsers={setUsers}
								title="Following"
							/>
							<Users
								users={usersUnfollowed}
								setUsers={setUsers}
								title="Follow"
							/>
						</Col>
						<Col md={8}>
							<TimelineMessages users={usersTimeline} />
						</Col>
					</Row>
				</Container>
			</UserSelectedContext.Provider>
		</>
	);
};

WebTwitter.propTypes = {};

export default WebTwitter;
