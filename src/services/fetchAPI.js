import axios from 'axios';

const url = 'http://localhost/api/admins'

export const fetchData = async (token, userRole) => {
    try {
        const { data } = await axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token,
                role: userRole,
            }
        });

        // console.log(result.data)
        return data
    } catch (error) {
        return console.error(`Woops fetch: ${error}`)
    }
}