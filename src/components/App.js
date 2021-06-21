import './App.css';
import CurrentForecast from './Weather/CurrentForecast';
import React, { Component } from 'react';
import OpenWeatherMapService from '../services/OpenWeatherMapService';
const API_KEY =`${process.env.REACT_APP_API_KEY}`
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usingBrowserLocation: true,
      browserLocation: {},
      setLocation: {},
      currentForecast: {},
      API_KEY: null
    }
  }

  async getCurrentForecast(lat, long) {
    await OpenWeatherMapService.getCurrentWeather(lat, long, API_KEY)
      .then((response) => this.setState({ currentForecast: response.data }))
      .catch(() =>this.setState({ autoShowSearchTemplate: true }))
  }

  async geolocationLookup(lat, long) {
    await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${ lat }&longitude=${ long }&localityLanguage=en`)
      .then((response) => response.json())
      .then((result) => this.setState({ setLocation: result, usingBrowserLocation: true }))
      .catch((error) =>  this.setState({ usingBrowserLocation: true }))
  }

  async componentDidMount() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        async (data) => {
          const { latitude, longitude } = await data.coords;
          this.setState({ browserLocation: { latitude, longitude } });
          await this.getCurrentForecast(latitude, longitude);
          await this.geolocationLookup(latitude, longitude);
        },
        console.log
      );
     } 
  }

  render() {
    return (
      <div className="App">
        <CurrentForecast 
          forecast = { this.state.currentForecast }
          location = { this.state.setLocation }
        />
      </div>
    );
  }
}

export default App;
