import axios from 'axios'

export const axiosAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        //TODO CHECK IF URL NEEDS TO BE UPDATED
        baseURL: '"https://med-cabinet-production.herokuapp.com/',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}

