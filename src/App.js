import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Weatherbody from './component/WeatherBody'
import Form from './component/Form';
import React from 'react';
import axios from 'axios';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      city: undefined ,
      country : undefined ,
      temp: undefined,
      temp_max: undefined,
      temp_min: undefined,
      hum: undefined,
      description:undefined
    }
  }
  calTemp(kelvin){
    let temp = Math.floor(kelvin-273.15);
    return temp;
  }
  getWeather = (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=94eb34b370f9a95e85482ea032ae4974`)
    .then(response => {
    console.log(response)
    if (city && country){
      this.setState({
        city:`${response.data.name},${response.data.sys.country}`,
        temp: this.calTemp(response.data.main.temp),
        temp_max: this.calTemp(response.data.main.temp_max),
        temp_min: this.calTemp(response.data.main.temp_min),
        hum: response.data.main.humidity,
        description:response.data.weather[0].main
      })
    }
  })
  }
  render() {
    return (
      <div className="App">
            <h1 className="title-container_title">Weather App</h1>  
            <p className="title-container_subtitle">Find weather condition in cities for you</p> 
            <Form loaderWeather={this.getWeather}/>
                <Weatherbody 
                  city={this.state.city} 
                  country={this.state.country}
                  temp_max={this.state.temp_max}
                  temp_min={this.state.temp_min}
                  temp={this.state.temp}
                  hum={this.state.hum}
                  description={this.state.description}
                />
      </div>
    );
  }
}

export default App;
