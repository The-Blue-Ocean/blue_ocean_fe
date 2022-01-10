import axios from 'axios';

const url = 'http://localhost/api/admin'
// const url = 'http://localhost/api/student'
// const urlAdmin = 'http://localhost/api/adminEmail'

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