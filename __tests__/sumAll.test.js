const sumAll = require("../sumAll");

describe("sumALl tests", () => {
	test("sumAll([1, 4]) should return a number. ", () => {
		const sum = sumAll([1, 4]);
		expect(typeof sum).toBe("number");
	});
	test("sumAll([1, 4]) should return 10. ", () => {
		const sum = sumAll([1, 4]);
		expect(sum).toBe(10);
	});
	test("sumAll([4, 1]) should return 10. ", () => {
		const sum = sumAll([4, 1]);
		expect(sum).toBe(10);
	});
	test("sumAll([5, 10]) should return 45. ", () => {
		const sum = sumAll([5, 10]);
		expect(sum).toBe(45);
	});
	test("sumAll([10, 5]) should return 45. ", () => {
		const sum = sumAll([10, 5]);
		expect(sum).toBe(45);
	});
	test("sumAll([5,5]) should return 10", () => {
		const sum = sumAll([5, 5]);
		expect(sum).toBe(10);
	});
});
