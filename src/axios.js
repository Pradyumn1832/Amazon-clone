import axios from "axios";

const instance = axios.create({
    baseURL: '...' //The API (cloud function ) URl  
});

export default instance;

