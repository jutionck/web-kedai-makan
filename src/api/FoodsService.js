import axios from 'axios'

const baseUrl = '/food'

const getFoods = async () => {
    let foods = await fetch(baseUrl)
    return await foods.json()
}

const createFoods = async (form) => {
    const foods = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })

    return await foods.json()
}



export {getFoods, createFoods}
