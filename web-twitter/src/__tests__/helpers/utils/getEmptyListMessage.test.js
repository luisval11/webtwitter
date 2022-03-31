import { getEmptyListMessage } from "../../../helpers/utils/getEmptyListMessage";

describe("Test on Helpers > getEmptyListMessage", () => {
	test("should return default message", () => {
		const expectedMessage = "No items for this list";
		const generalMessage = getEmptyListMessage();

		expect(generalMessage).toBe(expectedMessage);
	});

	test("should return message for title Following", () => {
		const expectedMessage = "No users followed";
		const generatedMessage = getEmptyListMessage("Following");

		expect(generatedMessage).toBe(expectedMessage);
	});

	test("should return message for title Follow", () => {
		const expectedMessage = "No users unfollowed";
		const generatedMessage = getEmptyListMessage("Follow");

		expect(generatedMessage).toBe(expectedMessage);
	});

	test("should return message for title Timeline", () => {
		const expectedMessage = "No posts for selected user";
		const generatedMessage = getEmptyListMessage("Timeline");

		expect(generatedMessage).toBe(expectedMessage);
	});
});
