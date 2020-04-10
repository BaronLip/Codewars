const Calculator = function() {
	this.evaluate = (string) => {
		let formula = string.split(' ');
		let chunk;
		let total;
		console.log(string);

		if (formula.length != 1) {
			let multIndex = formula.findIndex((char) => {
				return char === '*';
			});

			let divIndex = formula.findIndex((char) => {
				return char === '/';
			});

			let addIndex = formula.findIndex((char) => {
				return char === '+';
			});

			let subIndex = formula.findIndex((char) => {
				return char === '-';
			});

			if (multIndex === 1) {
				chunk = formula.slice(multIndex - 1, multIndex + 2);

				total = parseInt(chunk[0]) * parseInt(chunk[2]);

				formula.splice(multIndex - 1, 3, total);

				this.evaluate(formula.join(' '));
			} else if (divIndex === 1) {
				chunk = formula.slice(divIndex - 1, divIndex + 2);
				total = parseInt(chunk[0]) / parseInt(chunk[2]);

				formula.splice(divIndex - 1, 3, total);

				this.evaluate(formula.join(' '));
			} else if (addIndex === 1 || subIndex === 1) {
				if (addIndex === 1) {
					chunk = formula.slice(addIndex - 1, addIndex + 2);
					total = parseInt(chunk[0]) + parseInt(chunk[2]);

					formula.splice(addIndex - 1, 3, total);

					this.evaluate(formula.join(' '));
				} else if (subIndex === 1) {
					chunk = formula.slice(subIndex - 1, subIndex + 2);
					total = parseInt(chunk[0]) - parseInt(chunk[2]);

					formula.splice(subIndex - 1, 3, total);
					this.evaluate(formula.join(' '));
				}
			}
		} else {
			// console.log("length of 1", parseInt(formula));
			let result = parseInt(formula);
			console.log(result);
			return parseInt(formula);
		}
	};
};
