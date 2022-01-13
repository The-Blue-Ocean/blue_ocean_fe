import axios from 'axios';

const url = 'http://localhost/api/admin'
// const url = 'https://blue-ocean-be.uc.r.appspot.com/api/students'
// const url = 'https://blue-ocean-be.uc.r.appspot.com/api/students'
// const urlAdmin = 'http://localhost/api/adminEmail'

export const fetchData = async (token, userRole) => {
    try {
        const { data } = await axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token,
                role: userRole,
            }
        });

        return data
    } catch (error) {
        return console.error(`Woops fetch: ${error}`)
    }
}