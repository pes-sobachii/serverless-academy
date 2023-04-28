import fs from 'fs'

export default (path) => {
	let db = fs.readFileSync(path, 'utf-8')
	if (db.length < 2) {
		db = []
	} else {
		db = JSON.parse(db)
	}
	return db
}