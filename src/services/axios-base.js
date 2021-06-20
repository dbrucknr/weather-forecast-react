import axios from "axios"

export default axios.create({
    baseAPIURL: "https://api.openweathermap.org"
})