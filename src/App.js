import React from 'react';

import './App.css';
import Player from './components/player';
import Search from './components/search';
import Axios from 'axios';

class Module extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      submit: '',
      weather: [],
      isLoaded: false,
      error: null,
      image: ''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });

  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submit: this.state.value });
    this.getInfo();
  }

  componentDidMount() {
    this.setState({isLoaded: false})
}
  getInfo = () => {
    const vars = this.state.value;
   

    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${vars}&appid=8bcaee364dd25e6ab4318dce38808245`)
      .then(result => this.setState({
        weather: result.data.weather[0],
        image:`http://openweathermap.org/img/w/${result.data.weather[0].icon}.png`,
        isLoaded: true,
        error:null

      }))
      .catch(error => this.setState({ error, isLoaded: true }));
      
    console.log(this.state.weather);
    console.log(this.state.error);

  }
  
  render() {
    const loadiing = 'loading';
    return <div>
      <Search value={this.state.value} change={this.handleChange} submit={this.handleSubmit} />

     

      {this.state.isLoaded ? <Player value={this.state.submit} image={this.state.image} result={this.state.weather} loading={this.state.isLoaded} error={this.state.error} /> : <Player result={loadiing}/>} </div>
  }
}


export default Module;