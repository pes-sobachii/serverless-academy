import fs from 'fs'
import getVacations from './getVacations.js'

const vacations = fs.readFileSync('./vacations.json', 'utf-8')

const formatted = getVacations(vacations)

fs.writeFileSync('./formatted.json', JSON.stringify(formatted, null, 2))
