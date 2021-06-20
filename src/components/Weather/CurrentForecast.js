import React, { Component } from 'react';
import OpenWeatherMapService from '../../services/OpenWeatherMapService';

const API_KEY =`${process.env.REACT_APP_API_KEY}`

class CurrentForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {},
            city: null,
            state: null,
            autoShowSearchTemplate: false
        }
    }

    async componentDidMount() {
        if (this.props.usingBrowserLocation) {
            const autoLocate = await this.props.browserLocation;
            console.log(autoLocate)
            const { latitude, longitude, city, principalSubdivision } = autoLocate;
            console.log(latitude, longitude, API_KEY)
            this.setState({ city: city, state: principalSubdivision })
            await OpenWeatherMapService.getCurrentWeather(latitude, longitude, API_KEY)
                .then((response) => this.setState({ forecast: response.data }))
                .catch(() =>this.setState({ autoShowSearchTemplate: true }))
        }
    }

    getCurrentForecast() {
        return Object.keys(this.state.forecast)
    }
    
    render() {
        return (
            <div>
                <h1>Current Forecast</h1>
                <div>
                    { this.state.city }, { this.state.state }
                    { this.getCurrentForecast() } 
                </div>
            </div>
        )
    }
}

export default CurrentForecast
