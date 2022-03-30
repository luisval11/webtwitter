export const getFilteredPosts = (posts, authorIds, users) =>
	posts
		.filter((post) => authorIds.includes(post.authorId))
		.map((post) => {
			return {
				...post,
				nameAuthor: users.find((user) => user.id === post.authorId).name,
			};
		});

export const getFilteredPostsSelectedUser = (posts, users, selectedUser) =>
	posts
		.filter((post) => post.authorId === selectedUser)
		.map((post) => {
			return {
				...post,
				nameAuthor: users.find((user) => user.id === post.authorId).name,
			};
		});
