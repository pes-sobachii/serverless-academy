const rl = require('./readline.js')

module.exports = (query) => new Promise((resolve) => rl.question(query, resolve))

