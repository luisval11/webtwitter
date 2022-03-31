import { mount } from "enzyme";
import { FormLabelStyled } from "../../atoms/FormLabelStyled";

describe("Test on Label", () => {
	test("should match initial snapshot", () => {
		let wrapper = mount(<FormLabelStyled text="Label" />);

		expect(wrapper).toMatchSnapshot();
	});

	test("should have a value 'A label' for text", () => {
		const textParam = "A label";
		let wrapper = mount(<FormLabelStyled text={textParam} />);
		
		expect(wrapper.find("label").text().trim()).toBe(textParam);
	});
});
