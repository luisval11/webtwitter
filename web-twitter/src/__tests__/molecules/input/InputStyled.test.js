import { mount } from "enzyme";
import { InputStyled } from "../../../molecules/input/InputStyled";

describe("Test on InputStyled", () => {
	test("should match initial snapshot", () => {
		let wrapper = mount(
			<InputStyled
				as="textarea"
				className="input__textarea"
				handleInput={() => console.log("Dummy function")}
				name="content"
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should render an input of type 'textarea'", () => {
		const typeParam = "textarea";
		let wrapper = mount(<InputStyled as={typeParam} />);
		const lenght = wrapper.find("textarea").length;

		expect(lenght).toBe(1);
	});
});

describe("Test on InputStyled with Label", () => {
	const label = "A single Label";

	test("should match initial snapshot", () => {
		let wrapper = mount(
			<InputStyled
				as="textarea"
				label={label}
				handleInput={() => console.log("Dummy function")}
				name="content"
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should render an input of type 'textarea' and a label", () => {
		const typeParam = "textarea";
		let wrapper = mount(<InputStyled as={typeParam} label={label} />);
		const lenghtTextarea = wrapper.find("textarea").length;
		const lenghtLabel = wrapper.find("label").length;

		expect(lenghtTextarea).toBe(1);
		expect(lenghtLabel).toBe(1);
	});
});
