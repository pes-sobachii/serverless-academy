import endpoints from './endpoints.js'
import reqHandler from './reqHandler.js'

const getData = () => {
	endpoints.map((endpoint) => reqHandler(endpoint, 1))
}

getData()
