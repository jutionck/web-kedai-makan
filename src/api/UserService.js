import axios from 'axios'
const baseUrl = '/users'

const getUsers = async () => {
    let token = sessionStorage.getItem("auth-token");
    let users = await axios.get(baseUrl, { headers: { "auth-token": token } });

    return  users;
};
export {getUsers}