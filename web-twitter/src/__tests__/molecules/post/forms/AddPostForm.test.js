import { render, fireEvent } from "@testing-library/react";
import AddPostForm from "../../../../molecules/post/forms/AddPostForm";

describe("Test on AddPostForm", () => {
	test("should match initial snapshot for AddPostForm", () => {
		const setPosts = jest.fn();
		let wrapper = render(<AddPostForm setPosts={setPosts} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("should have 1 textarea", () => {
		const setPosts = jest.fn();
		const { container } = render(<AddPostForm setPosts={setPosts} />);
		const inputLength = container.getElementsByClassName("form-control").length;
		expect(inputLength).toBe(1);
	});

	test("should have 1 button", () => {
		const setPosts = jest.fn();
		const { container } = render(<AddPostForm setPosts={setPosts} />);
		const buttonLength = container.getElementsByClassName("btn-primary").length;
		expect(buttonLength).toBe(1);
	});

	test("should reset the value of the 'content' input when button is clicked", () => {
		const setPosts = jest.fn();
		const { container } = render(<AddPostForm setPosts={setPosts} />);
		const button = container.getElementsByClassName("btn-primary")[0];
		const input = container.getElementsByClassName("form-control")[0];
		fireEvent.change(input, { target: { value: content } });
		fireEvent.click(button);
		expect(setPosts).toHaveBeenCalledTimes(1);
	});
});
