import React, { Component } from 'react';

class CurrentForecast extends Component {

    getCurrentForecast() {
        return this.props.currentForecast
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
