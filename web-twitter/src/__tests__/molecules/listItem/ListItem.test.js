import { mount } from "enzyme";
import { UserSelectedContext } from "../../../contexts/UserSelectedContext";
import { InputStyled } from "../../../molecules/input/InputStyled";
import ListItem from "../../../molecules/listItem/ListItem";

describe("Test on ListItem", () => {
	const itemUser = {
		id: 1,
		name: "Alice",
		isFollowed: true,
	};
	const itemPost = {
		id: 1,
		nameAuthor: "Alice",
		authorId: 1,
		content: "Lorem ipsum content large",
		createdDate: new Date(2022, 2, 28, 14, 30),
	};
	const onClickAction = () => {
		console.log("Dummy click action");
	};
	const onClickItem = () => {
		console.log("Dummy click item");
	};

	test("should match initial snapshot for TypedListItem 'user'", () => {
		let wrapper = mount(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<ListItem
					type={"user"}
					item={itemUser}
					onClickAction={onClickAction}
					onClickItem={onClickItem}
				/>
			</UserSelectedContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should match an snapshot for TypedListItem 'user' with that user being selected", () => {
		const { id } = itemUser;
		let wrapper = mount(
			<UserSelectedContext.Provider value={{ selectedUser: id }}>
				<ListItem
					type={"user"}
					item={itemUser}
					onClickAction={onClickAction}
					onClickItem={onClickItem}
				/>
			</UserSelectedContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("div.list-item--selected").length).toBe(1);
	});

	test("should have 1 'span' containing the value of the attribute 'name'", () => {
		const { name } = itemUser;
		let wrapper = mount(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<ListItem
					type={"user"}
					item={itemUser}
					onClickAction={onClickAction}
					onClickItem={onClickItem}
				/>
			</UserSelectedContext.Provider>
		);
		expect(wrapper.find("span").length).toBe(1);
		expect(wrapper.find("span").text().trim()).toBe(name);
	});

	test("should have 1 'button' with text relating to the attribute 'isFollowed'", () => {
		const { isFollowed } = itemUser;
		let wrapper = mount(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<ListItem
					type={"user"}
					item={itemUser}
					onClickAction={onClickAction}
					onClickItem={onClickItem}
				/>
			</UserSelectedContext.Provider>
		);
		expect(wrapper.find("button").length).toBe(1);
		expect(wrapper.find("button").text().trim()).toBe(
			isFollowed ? "Unfollow" : "Follow"
		);
	});

	test("should match initial snapshot for TypedListItem 'post'", () => {
		let wrapper = mount(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<ListItem type={"post"} item={itemPost} onClickItem={onClickItem} />
			</UserSelectedContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should have 1 'div' with className 'card-title' containing the value of the attribute 'nameAuthor'", () => {
		const { nameAuthor } = itemPost;
		let wrapper = mount(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<ListItem type={"post"} item={itemPost} onClickItem={onClickItem} />
			</UserSelectedContext.Provider>
		);
		expect(wrapper.find("div.card-title").length).toBe(1);
		expect(wrapper.find("div.card-title").text().trim()).toBe(nameAuthor);
	});

	test("should have 1 'p' with className 'card-text' containing the value of the attribute 'content'", () => {
		const { content } = itemPost;
		let wrapper = mount(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<ListItem type={"post"} item={itemPost} onClickItem={onClickItem} />
			</UserSelectedContext.Provider>
		);
		expect(wrapper.find("p.card-text").length).toBe(1);
		expect(wrapper.find("p.card-text").text().trim()).toBe(content);
	});
});
