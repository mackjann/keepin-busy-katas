const sumAll = require("../sumAll");

describe("sumALl tests", () => {
	test("sumAll([1, 4]) should return a number. ", () => {
		const sum = sumAll([1, 4]);
		expect(typeof sum).toBe("number");
	});
});
