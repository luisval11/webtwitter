import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { UserSelectedContext } from "../contexts/UserSelectedContext";
import { DUMMY_POSTS } from "../helpers/const";
import {
	getFilteredPosts,
	getFilteredPostsSelectedUser
} from "../helpers/utils/getFilteredPosts";
import { AddPostForm } from "../molecules/post/forms/AddPostForm";
import { List } from "../organisms/List";
import "./style.css";
export const TimelineMessages = ({ users }) => {
	const [posts, setPosts] = useState(DUMMY_POSTS);

	const [postsFiltered, setPostsFiltered] = useState([]);
	const { selectedUser } = useContext(UserSelectedContext);

	useEffect(() => {
		if (selectedUser === null) {
			const authorIds = users.map((user) => user.id);
			setPostsFiltered(getFilteredPosts(posts, authorIds, users));
		} else {
			setPostsFiltered(
				getFilteredPostsSelectedUser(posts, users, selectedUser)
			);
		}
	}, [selectedUser, posts, users]);

	return (
		<div className="timeline">
			<List title="Timeline" items={postsFiltered} type="post" />
			<AddPostForm setPosts={setPosts} />
		</div>
	);
};

TimelineMessages.propTypes = {
	users: PropTypes.array.isRequired,
};

export default TimelineMessages;
