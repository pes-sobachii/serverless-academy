import fs from 'fs'
import loadFilePromise from './loadFilePromise.js'

const processData = async () => {
	const counter = {}
	const files = fs.readdirSync('./')
	const promisesResults = await Promise.all(
		files
			.filter((item) => item.endsWith('.txt'))
			.map((name) => loadFilePromise(name))
	)
		.then((data) => {
			data.forEach((item, itemIndex) => {
				item.forEach((line) => {
					if (!counter[line]) counter[line] = new Set()
					counter[line].add(itemIndex)
				})
			})
			return Object.entries(counter)
		})
		.catch((err) => {
			console.log(err)
		})
	return promisesResults
}

export default processData
