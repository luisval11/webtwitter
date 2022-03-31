import { parseDiffTime } from "../../../helpers/utils/parseDiffTime";

describe("Test on Helpers > parseDiffTime", () => {
	let date = null;

	beforeEach(() => {
		date = new Date();
	});

	test("should calculate a difference of 1 day", () => {
		const yesterday = new Date(date.setDate(date.getDate() - 1));
		const expectedParse = date.toLocaleString("default", {
			day: "numeric",
			month: "short",
		});
		const generatedParse = parseDiffTime(yesterday);

		expect(generatedParse).toBe(expectedParse);
	});

	test("should calculate a difference of '2' hours", () => {
		const hourAgo = 2;
		const time = new Date(date.getTime() - hourAgo * 60 * 60 * 1000);
		const expectedParse = `${hourAgo}h`;
		const generatedParse = parseDiffTime(time);

		expect(generatedParse).toBe(expectedParse);
	});

	test("should calculate a difference of '30' minutes", () => {
		const minutesAgo = 30;
		const time = new Date(date.getTime() - minutesAgo * 60 * 1000);
		const expectedParse = `${minutesAgo}m`;
		const generatedParse = parseDiffTime(time);

		expect(generatedParse).toBe(expectedParse);
	});

	test("should return 'A few seconds ago'", () => {
		const secondsAgo = 10;
		const time = new Date(date.getTime() - secondsAgo * 1000);
		const expectedParse = "A few seconds ago";
		const generatedParse = parseDiffTime(time);

		expect(generatedParse).toBe(expectedParse);
	});
});
