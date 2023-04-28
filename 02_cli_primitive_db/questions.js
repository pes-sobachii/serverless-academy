export const startQuestions = [
	{
		name: 'name',
		message: 'Enter your name. Press ENTER to stop: ',
		type: 'input',
	},
]

export const shouldSearch = [
	{
		type: 'list',
		name: 'exit',
		message: 'Do you want search for users?',
		choices: ['yes', 'no'],
	},
]

export const specifyUser = [
	{
		type: 'input',
		name: 'search',
		message: 'What user do you want to find?',
	},
]

export const newUserQuestions = [
	{
		name: 'gender',
		message: 'Specify your gender: ',
		type: 'list',
		choices: ['male', 'female', 'Attack Helicopter'],
	},
	{
		name: 'age',
		message: 'Enter your age: ',
		type: 'number',
	},
]