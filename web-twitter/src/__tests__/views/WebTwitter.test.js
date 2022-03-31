import { mount } from "enzyme";
import WebTwitter from "../../views/WebTwitter";

describe("Test on WebTwitter", () => {
	test("should match initial snapshot", () => {
		let wrapper = mount(<WebTwitter />);

		expect(wrapper).toMatchSnapshot();
	});

	test("should have the 3 'list' elements", () => {
		let wrapper = mount(<WebTwitter />);

		expect(wrapper.find("div.list").length).toBe(3);
	});

	test("should have the 1 'form' element", () => {
		let wrapper = mount(<WebTwitter />);

		expect(wrapper.find("div.list").length).toBe(3);
	});
});
