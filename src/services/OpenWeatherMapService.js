import http from "./axios-base";

const getCurrentWeather = (latitude, longitude, APIkey) => { 
    return http.get(`/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&units=imperial&APPID=${ APIkey }`)
}

export default {
    getCurrentWeather
}