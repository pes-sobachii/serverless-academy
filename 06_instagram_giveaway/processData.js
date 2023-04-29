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
			data.forEach((item) => {
				item.forEach((line) => {
					counter[line] = counter[line] ? counter[line] + 1 : 1
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
