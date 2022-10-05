import { baseURL, eventsQuantity } from '/src/scripts/variables.js'

async function getEvents(userName) {
    const url = `${baseURL}/${userName}/events?per_page=${eventsQuantity}`
    const response = await fetch(url)
    return await response.json()
}

export { getEvents }

