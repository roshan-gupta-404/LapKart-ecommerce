import axios from "axios";
import config from "./config";

const makeRequest = axios.create({
    baseURL:config.apiUrl,
    headers:{
        Authorization: "bearer " + config.apiKey
    }
})

export default makeRequest