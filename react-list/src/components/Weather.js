import React, { Component } from "react";
import axios from "axios";
import "./Weather.css";

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weather: "?",
    };
  }

  componentDidMount = () => {
    axios.get("/getweather").then((response) => {
      this.setState({
        weather: response.data.temp,
      });
    });
  };
  render() {
    return (
      <div className="vln_container">
        <h1>Lithuania's capital Vilnius current temperature:</h1>
        <div className="celcius_container">
          <h2>{this.state.weather}°</h2>
        </div>
      </div>
    );
  }
}
