import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nuabit-6920f.firebaseio.com/'
})

export default instance;