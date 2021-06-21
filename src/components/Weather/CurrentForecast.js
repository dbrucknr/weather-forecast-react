import React, { Component } from 'react';


class CurrentForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {},
            location: {}
        }
    }

    static getDerivedStateFromProps(props) {
        return {
            forecast: props.forecast,
            location: props.location
        }
    }
    

    getCurrentForecast() {
        const { temp, feels_like, temp_min, temp_max, humidity } = this.state.forecast.main;
        const { description, icon, main } = this.state.forecast.weather[0];
        return (
            <div>
                Temperature: { temp }<br />
                Feels Like: { feels_like }<br />
                Minimum Temperature: { temp_min }<br />
                Maximum Temperature: { temp_max }<br />
                Humidity: { humidity }<br />
            </div>
        )
    }
    
    render() {
        return (
            <div>
                <h1>Current Forecast</h1>
                <div>
                   { this.getCurrentForecast() }
                </div>
            </div>
        )
    }
}

export default CurrentForecast
