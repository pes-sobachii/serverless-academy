const rl = require('./readline.js')
const prompt = require('./prompt.js')
const {
	alphabetical,
	ascNumber,
	descNumber,
	ascWordLength,
	uniqueWords,
	uniqueValues,
} = require('./service.js')

const start = async (greeting, instruction) => {
	let stop = false
	while (!stop) {
		try {
			const str = await prompt(greeting)
			const sortType = await prompt(instruction)
			switch (sortType) {
				case '1':
					alphabetical(str)
					break
				case '2':
					ascNumber(str)
					break
				case '3':
					descNumber(str)
					break
				case '4':
					ascWordLength(str)
					break
				case '5':
					uniqueWords(str)
					break
				case '6':
					uniqueValues(str)
					break
				case 'exit':
					console.log('See ya!')
					stop = true
					break
				default:
					console.log('Wrong input, try again')
					break
			}
		} catch (e) {
			console.error('Unable to prompt', e)
		} finally {
			rl.on('close', () => process.exit(0))
		}
	}
	rl.close()
}

module.exports = start
