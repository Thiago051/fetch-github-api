import { baseURL } from '/src/scripts/variables.js'

async function getUser(userName) {
    const url = `${baseURL}/${userName}`
    const response = await fetch(url)
    return await response.json()
}

export { getUser }