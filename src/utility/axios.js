import axios from "axios";

const instance = axios.create({
    baseURL:process.env.REACT_APP_NEWS_URL,
    // headers: {'X-Custom-Header': '555'}
})

instance.defaults.headers.common['X-Api-Key'] = process.env.REACT_APP_NEWS_API_KEY
// instance.defaults.headers.common['Authorization'] = '55577777'


export default instance;