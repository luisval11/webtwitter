import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Test on useForm", () => {
	const initialForm = {
		content: "Luis",
	};
	const loremIpsumValue = "Lorem ipsum value to be subtitued";

	test("should return a form by default", () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [formValues, handleInputChange, reset] = result.current;

		expect(typeof handleInputChange).toBe("function");
		expect(typeof reset).toBe("function");
		expect(formValues).toEqual(initialForm);
	});

	test("should change the value of the form 'content'", () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange] = result.current;
        
		act(() => {
			handleInputChange({
				target: {
					id: "content",
					value: loremIpsumValue,
				},
			});
		});

		const [formValues] = result.current;
		expect(formValues).toEqual({ ...initialForm, content: loremIpsumValue });
	});

	test("should reset the values of the form", () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange, reset] = result.current;

		act(() => {
			handleInputChange({
				target: {
					name: "content",
					value: loremIpsumValue,
				},
			});
			reset();
		});

		const [formValues] = result.current;
		expect(formValues).toEqual(initialForm);
	});
});
