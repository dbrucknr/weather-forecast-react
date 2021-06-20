import './App.css';
import CurrentForecast from './Weather/CurrentForecast';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usingBrowserLocation: true,
      browserLocation: {},
      API_KEY: null
    }
  }

  async geolocationLookup(lat, long){
    await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${ lat }&longitude=${ long }&localityLanguage=en`)
      .then((response) => response.json())
      .then((result) => this.setState({ browserLocation: result, usingBrowserLocation: true }))
      .catch((error) =>  this.setState({ usingBrowserLocation: true }))
  }

  async componentDidMount() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (data) => {
          const { latitude, longitude } = data.coords;
          this.geolocationLookup(latitude, longitude);
        },
        console.log
      );
     } 
  }

  render() {
    return (
      <div className="App">
        <CurrentForecast {...this.state} />
      </div>
    );
  }
}

export default App;
