const baseUrl = '/user'

const getUsers = async () => {
    let users = await fetch(baseUrl)
    return await users.json()
}

export {getUsers}