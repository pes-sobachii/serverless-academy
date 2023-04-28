import axios from 'axios'
import TelegramBot from 'node-telegram-bot-api'
import outputMessage from './outputMessage.js'
import { intervalsButtons, forecastButton } from './buttons.js'

const startBot = (token, appId) => {
	const bot = new TelegramBot(token, { polling: true })

	bot.onText(/\/start/, (msg) => {
		bot.sendMessage(msg.chat.id, 'Welcome!', {
			reply_markup: {
				inline_keyboard: forecastButton,
			},
		})
	})

	bot.on('callback_query', async function onCallbackQuery(callbackQuery) {
		const action = callbackQuery.data
		const msg = callbackQuery.message

		let forecast = await axios
			.get(
				`https://api.openweathermap.org/data/2.5/forecast?q=Lviv,ua&cnt=6&appid=${appId}`
			)
			.then((res) => res.data.list)

		if (action === 'three') {
			bot.sendMessage(msg.chat.id, outputMessage(forecast, 3))
		}
		if (action === 'six') {
			bot.sendMessage(msg.chat.id, outputMessage(forecast, 6))
		}
		if (action === 'forecast') {
			bot.sendMessage(msg.chat.id, 'Choose the format', {
				reply_markup: {
					inline_keyboard: intervalsButtons,
				},
			})
		}
	})
}

export default startBot
