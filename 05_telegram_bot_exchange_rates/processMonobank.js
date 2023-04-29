import axios from 'axios'
import myCache from './cache.js'

const monobankProcess = async (currency) => {
	let monobank
	if (myCache.get('currency')) {
		console.log('from cache')
		monobank = myCache.get('currency')
	} else {
		monobank = await axios
			.get('https://api.monobank.ua/bank/currency')
			.then((res) => res.data)
		console.log('from api')
		myCache.set('currency', monobank)
	}

	const data = monobank.find(
		(item) =>
			(currency === 'USD'
				? item.currencyCodeA === 840
				: item.currencyCodeA === 978) && item.currencyCodeB === 980
	)

	return data
}

export default monobankProcess
