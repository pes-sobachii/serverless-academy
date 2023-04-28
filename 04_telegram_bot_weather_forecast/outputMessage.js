const outputMessage = (forecast, interval) => {
	const data = forecast
		.map((item) => {
			return `
            Time: ${item.dt_txt.split(' ')[1]}
            Temperature: ${Math.round(item.main.temp - 273.15)}°C
            Weather: ${item.weather[0].description}
            `
		})
		.filter((_, i) => (interval === 3 ? true : i % 2 === 0))
	return `Weather forecast for the next couple of hours (at intervals of ${interval} hours):\n${data.join(
		'\n'
	)}`
}

export default outputMessage
