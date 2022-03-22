import axios from "axios";

const API_KEY = "828c3cf99e1b833850a9c928a9dcb6a2;"
const URL = "api.openweathermap.org/data/2.5/weather";

export const getData = () =>{
    return axios.get(`${URL}?mumbai,India&appid=${API_KEY}&units=metric`);
}