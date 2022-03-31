import { render, screen } from "@testing-library/react";
import { UserSelectedContext } from "../../contexts/UserSelectedContext";
import { DUMMY_USERS } from "../../helpers/const";
import List from "../../organisms/List";

describe("Test on Users", () => {
	const dummyUsers = DUMMY_USERS;
	const dummyFollowedUsers = dummyUsers.filter(
		(user) => user.isFollowed === true || user.isFollowed === null
	);
	const dummyUnfollowedUsers = dummyUsers.filter(
		(user) => user.isFollowed === false
	);

	test("should match initial snapshot for a List of users", () => {
		const handleClickItem = jest.fn();
		const handleClickAction = jest.fn();
		let wrapper = render(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<List 
					items={dummyFollowedUsers}
					onClickItem={handleClickItem}
					onClickAction={handleClickAction}
					type="user"
				/>
			</UserSelectedContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});
	//test("should have the number of items according to lenght of items props", () => {
	//	render(
	//		<UserSelectedContext.Provider value={{ selectedUser: null }}>
	//			<List
	//				items={dummyItems}
	//				onClickItem={() => console.log("Dummy onClickItem")}
	//				onClickAction={() => console.log("Dummy onClickAction")}
	//				type="user"
	//			/>
	//		</UserSelectedContext.Provider>
	//	);
	//	const dummyItemsLength = dummyItems.length;
	//	const itemsLength = screen.getAllByRole("listitem").length;
	//	expect(itemsLength).toBe(dummyItemsLength);
	//});
});
