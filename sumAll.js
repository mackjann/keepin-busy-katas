// Sum all Numbers in a Range

// We will pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
	// Sort the array into numeric order
	const sortedArr = arr.sort((a, b) => a - b);

	//If same number just return total
	if (sortedArr[0] === sortedArr[1]) {
		return sortedArr[0] + sortedArr[1];
	}

	//If not same, adds range of numbers between a and b to sum incl a + b
	let sum = 0;
	for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
		sum += i;
	}
	return sum;
}

module.exports = sumAll;
