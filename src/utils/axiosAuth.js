import axios from 'axios'


export const axiosAuth = () => {
    const token = localStorage.getItem('token')
    const userID = localStorage.getItem('user_id')
    console.log(userID)
    return axios.create({
        //TODO CHECK IF URL NEEDS TO BE UPDATED
        baseURL: "https://med-cabinet-production.herokuapp.com",
        headers: {
            Authorization: token
        }
    })
}

