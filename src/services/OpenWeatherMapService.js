import http from "./axios-base";

class OpenWeatherMapService {

    getCurrentWeather(latitude, longitude, key) { 
        return http.get(`/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&units=imperial&APPID=${ key }`);
    }
}

export default new OpenWeatherMapService();