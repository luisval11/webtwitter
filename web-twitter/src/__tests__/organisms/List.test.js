import { render, screen } from "@testing-library/react";
import { UserSelectedContext } from "../../contexts/UserSelectedContext";
import { DUMMY_USERS } from "../../helpers/const";
import List from "../../organisms/List";

describe("Test on List", () => {
	const dummyItems = DUMMY_USERS;

	test("should match initial snapshot for a List of items", () => {
		let wrapper = render(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<List
					items={dummyItems}
					onClickItem={() => console.log("Dummy onClickItem")}
					onClickAction={() => console.log("Dummy onClickAction")}
					type="user"
				/>
			</UserSelectedContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});
	test("should have the number of items according to lenght of items props", () => {
		render(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<List
					items={dummyItems}
					onClickItem={() => console.log("Dummy onClickItem")}
					onClickAction={() => console.log("Dummy onClickAction")}
					type="user"
				/>
			</UserSelectedContext.Provider>
		);
		const dummyItemsLength = dummyItems.length;
		const itemsLength = screen.getAllByRole("listitem").length;
		expect(itemsLength).toBe(dummyItemsLength);
	});
	test("should have a title", () => {
		const title = "Dummy title";
		let wrapper = render(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<List
					items={dummyItems}
					onClickItem={() => console.log("Dummy onClickItem")}
					onClickAction={() => console.log("Dummy onClickAction")}
					title={title}
					type="user"
				/>
			</UserSelectedContext.Provider>
		);
		const textTitle = screen.getByText(title).textContent;
		expect(textTitle).toBe(title);
	});
});
