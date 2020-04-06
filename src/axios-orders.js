import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-first-1a912.firebaseio.com/'
})

export default instance