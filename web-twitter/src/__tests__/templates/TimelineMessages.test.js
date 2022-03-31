import { render } from "@testing-library/react";
import { UserSelectedContext } from "../../contexts/UserSelectedContext";
import { DUMMY_USERS } from "../../helpers/const";
import TimelineMessages from "../../templates/TimelineMessages";

describe("Test on TimelineMessages", () => {
	const dummyUsers = DUMMY_USERS;

	test("should match initial snapshot for TimelineMessages", () => {
		const { container } = render(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<TimelineMessages users={dummyUsers} />
			</UserSelectedContext.Provider>
		);
		expect(container).toMatchSnapshot();
	});

	test("should have 6 initial div elements with className 'list-group-item'", () => {
		const { container } = render(
			<UserSelectedContext.Provider value={{ selectedUser: null }}>
				<TimelineMessages users={dummyUsers} />
			</UserSelectedContext.Provider>
		);
		const messagesLenght =
			container.getElementsByClassName("list-group-item").length;
		expect(messagesLenght).toBe(6);
	});
});
