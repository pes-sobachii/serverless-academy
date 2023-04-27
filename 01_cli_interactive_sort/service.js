const isNumber = require('./isNumber.js')

const sortService = {
	alphabetical: (str) => {
		console.log(str.split(' ').sort())
	},
	ascNumber: (str) => {
		const result = str
			.split(' ')
			.filter((el) => isNumber(el))
			.sort((a, b) => +a - +b)
		console.log(result)
	},
	descNumber: (str) => {
		const result = str
			.split(' ')
			.filter((el) => isNumber(el))
			.sort((a, b) => +b - +a)
		console.log(result)
	},
	ascWordLength: (str) => {
		const result = str
			.split(' ')
			.filter((el) => !isNumber(el))
			.sort((a, b) => a.length - b.length)
		console.log(result)
	},
	uniqueWords: (str) => {
		const result = [...new Set(str.split(' ').filter((el) => !isNumber(el)))]
		console.log(result)
	},
	uniqueValues: (str) => {
		const result = [...new Set(str.split(' '))]
		console.log(result)
	},
}

module.exports = sortService
