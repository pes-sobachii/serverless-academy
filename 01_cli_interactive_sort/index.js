const start = require('./startFn.js')

const greeting = 'Enter a string to sort: '
const instruction = `Enter a number of sort type:
1 Sort words alphabetically
2 Show numbers from lesser to greater
3 Show numbers from bigger to smaller
4 Display words in ascending order by number of letters in the word
5 Show only unique words
6 Display only unique values from the set of words and numbers entered by the user
7 To exit the program, the user need to enter exit, otherwise the program will repeat itself again and again, asking for new data and suggesting sorting
`

start(greeting, instruction)
