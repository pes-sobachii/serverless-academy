import axios from 'axios'
import parseObject from './parseObject.js'

const reqHandler = async (endpoint, tryNumber) => {
	try {
		const { data } = await axios.get(endpoint)
		const isDone = parseObject(data, 'isDone')
		console.log(`[Success] ${endpoint}: isDone - ${isDone?.isDone}`)
		return data
	} catch (error) {
		if (tryNumber <= 3) {
			await reqHandler(endpoint, tryNumber + 1)
		} else {
			console.log(`[Fail] ${endpoint}: The endpoint is unavailable`)
		}
	}
}

export default reqHandler
