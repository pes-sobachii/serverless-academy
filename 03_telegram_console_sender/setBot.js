import { program } from 'commander'
import TelegramBot from 'node-telegram-bot-api'

const setBot = (chatId, token) => {
	const bot = new TelegramBot(token, { polling: true })

	program
		.command('send-message <message>')
		.description('send a message')
		.action((message) => {
			bot.sendMessage(chatId, message).then(() => process.exit())
		})

	program
		.command('send-photo <path>')
		.description('send a photo')
		.action((path) => {
			bot.sendPhoto(chatId, path).then(() => process.exit())
		})

	program.parse(process.argv)
}

export default setBot
