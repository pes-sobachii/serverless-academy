const parseObject = (obj, prop) => {
	for (let key in obj) {
		if (key === prop && typeof obj[key] !== 'object') {
			return { isDone: obj[key] }
		}
		if (typeof obj[key] !== 'object') continue
		const result = parseObject(obj[key], prop)
		if (result?.hasOwnProperty('isDone')) return result
	}
}

export default parseObject
