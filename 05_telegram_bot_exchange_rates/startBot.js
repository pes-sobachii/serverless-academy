import TelegramBot from 'node-telegram-bot-api'
import getCurrency from './getCurrency.js'

const startBot = (token) => {
	const bot = new TelegramBot(token, { polling: true })

	bot.onText(/\/start/, (msg) => {
		bot.sendMessage(msg.chat.id, 'Welcome!', {
			reply_markup: {
				resize_keyboard: true,
				keyboard: [['USD', 'EUR']],
			},
		})
	})

	bot.on('message', function onCallbackQuery(msg) {
		if (msg.text === 'USD') {
			getCurrency('USD', msg.chat.id, bot)
		}
		if (msg.text === 'EUR') {
			getCurrency('EUR', msg.chat.id, bot)
		}
	})
}

export default startBot
