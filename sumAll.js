// Sum all Numbers in a Range

// We will pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10
// sumAll([4, 1]) should return 10
// sumAll([5, 10]) should return 45
// sumAll([10, 5]) should return 45

function sumAll([a, b]) {
	if (a < b) {
		let total = 0;
		for (let i = 0; i <= b; i++) {
			total++;
		}
		return total + a + b;
	} else {
		return "Nah bruh";
	}
}

module.exports = sumAll;
