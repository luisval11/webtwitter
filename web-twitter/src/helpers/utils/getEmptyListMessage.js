export const getEmptyListMessage = (title) => {
    switch (title) {
        case "Following":
            return "No users followed";
        case "Follow":
            return "No users unfollowed";
        case "Timeline":
            return "No posts for selected user";
        default:
            return "No items for this list";
    }
};
