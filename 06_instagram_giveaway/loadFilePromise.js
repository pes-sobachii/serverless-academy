import fs from 'fs'

let loadFilePromise = function (src) {
	return new Promise((resolve, reject) => {
		fs.readFile(src, 'utf8', (err, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data.split('\n'))
			}
		})
	})
}

export default loadFilePromise
