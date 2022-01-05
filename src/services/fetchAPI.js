import axios from 'axios';

const url = 'http://localhost/api/students'

export const fetchData = async (token) => {
    try {
        const { data } = await axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        // console.log(result.data)
        return data
    } catch (error) {
        return console.error(`Woops fetch: ${error}`)
    }
}