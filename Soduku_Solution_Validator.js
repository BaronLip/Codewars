function validSolution(board) {
	let range = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	let columns = {};
	let boxes = {};
	let box = 0;

	const containsAllNumbers = (numArray, range) => range.every((value) => numArray.includes(value));

	const createBox = (numArray) => {};

	for (let i = 0; i < board.length; i++) {
		// Check each row for all numbers.
		if (containsAllNumbers(board[i], range) === false) {
			return false;
		}

		// Create columns.
		if (!columns.hasOwnProperty([ i ])) {
			columns[i] = [];

			board.forEach((row) => {
				return columns[i].push(row[i]);
			});
		} else {
			return columns[i].push(row[i][i]);
		}

		// Create boxes.
		// board[i] represents each row of numbers.
		// nIndex represents the index within each row.
		board[i].forEach((n, nIndex) => {
			if (i < 3) {
				if (nIndex < 3) {
					box = 1;
				} else if (nIndex > 2 && nIndex < 6) {
					box = 2;
				} else {
					box = 3;
				}
			} else if (i > 2 && i < 6) {
				if (nIndex < 3) {
					box = 4;
				} else if (nIndex > 2 && nIndex < 6) {
					box = 5;
				} else {
					box = 6;
				}
			} else {
				if (nIndex < 3) {
					box = 7;
				} else if (nIndex > 2 && nIndex < 6) {
					box = 8;
				} else {
					box = 9;
				}
			}
			// This is where each row for boxes gets filled.
			if (boxes[box]) {
				boxes[box].push(n);
			} else {
				boxes[box] = [];
				boxes[box].push(n);
			}
		});
	} // End for.
	console.log(columns);
	console.log(boxes);

	// Check every column for containing all numbers.
	for (row in columns) {
		if (containsAllNumbers(columns[row], range) === false) {
			return false;
		}
	}

	for (row in boxes) {
		if (containsAllNumbers(boxes[row], range) === false) {
			return false;
		}
	}

	return true;
}
