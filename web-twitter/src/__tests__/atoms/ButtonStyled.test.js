import { mount } from "enzyme";
import { ButtonStyled } from "../../atoms/ButtonStyled";

describe("Test on Button", () => {
	test("should match initial snapshot", () => {
		let wrapper = mount(<ButtonStyled text="InitialTest" />);

		expect(wrapper).toMatchSnapshot();
	});

	test("should have the text 'Button'", () => {
		const text = "Button";
		let wrapper = mount(<ButtonStyled text={text} />);
        
		expect(wrapper.find("button").text().trim()).toBe(text);
	});
});
