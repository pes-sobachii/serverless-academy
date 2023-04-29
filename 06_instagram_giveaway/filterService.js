import processData from "./processData.js"

const filterService = {
	uniqueValues: async () => {
		const values = await processData()
		console.log(values)
		const unique = values.filter((item) => item[1].size === 1)
		return unique.length
	},
	existInAllFiles: async () => {
		const values = await processData()
		const existInAll = values.filter((item) => item[1].size === 20)
		return existInAll.length
	},
	existInAtLeastTen: async () => {
		const values = await processData()
		const existInTen = values.filter((item) => item[1].size >= 10)
		return existInTen.length
	},
}

export default filterService
