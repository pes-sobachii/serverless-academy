import axios from 'axios'
import monobankProcess from './processMonobank.js'

const getCurrency = (currency, id, bot) => {

   const roundToTwo = (num) => {
      return (Math.round(num * 100) / 100)
   }

	monobankProcess(currency).then((monoData) => {
		axios
			.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
			.then((res) => {
				const privatData = res.data.find((item) => item.ccy === currency)
				const privatBuy = roundToTwo(privatData.buy)
				const privatSale = roundToTwo(privatData.sale)
				const monoBuy = roundToTwo(monoData.rateBuy)
				const monoSale = roundToTwo(monoData.rateSell)
				bot.sendMessage(
					id,
					`
						${currency}
						Buy: ${privatBuy} UAH (PB), ${monoBuy} UAH (Mono)
						Sale: ${privatSale} UAH (PB), ${monoSale} UAH (Mono)
						`
				)
			})
	})
}

export default getCurrency
