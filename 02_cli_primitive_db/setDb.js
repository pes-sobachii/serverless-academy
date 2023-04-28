import inquirer from 'inquirer'
import fs from 'fs'
import readDb from './readDb.js'
import {
	shouldSearch,
	specifyUser,
	startQuestions,
	newUserQuestions,
} from './questions.js'
import findUser from './findUser.js'

const setDb = (path) => {
	inquirer
		.prompt(startQuestions)
		.then(({ name }) => {
			if (name === '') {
				inquirer.prompt(shouldSearch).then(({ exit }) => {
					if (exit === 'no') return
					let db = readDb(path)
					console.log(db)
					inquirer.prompt(specifyUser).then(({ search }) => {
						const db = readDb(path)
						const user = findUser(db, search)
						console.log(user ? user : 'User not found')
						setDb(path)
					})
				})
			} else {
				inquirer.prompt(newUserQuestions).then((answers) => {
					let db = readDb(path)
					db.push({ name, ...answers })
					fs.writeFileSync(path, JSON.stringify(db))
					setDb(path)
				})
			}
		})
		.catch((error) => {
			console.log(error)
		})
}

export default setDb
