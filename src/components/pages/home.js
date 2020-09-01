import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="home-page">
          <div className="left">
            <div className="center">
              <h1>Smart Head Co.</h1>
              <h2>A Brain Smart Community</h2>
              <p>"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration." Nikola Tesla</p>
              <p>Smart Head Co. is committed to creating high vibrational Brains through Brain Education.
              </p>
              <p>Smart Heads do this;</p>
              <ul>
                <li>Brain Smart Food</li>
                <li>Brain Smart Vibration</li>
                <li>Brain Smart Puzzles</li>
                <li>Brain Smart Movement</li>
                <li>Brain Science</li>
                <li>Tech and Innovation</li>
              </ul>
              <div className="be-smart-head">
              </div>
            </div>
            <div className="right">
            </div>
          </div>
        </div>
          
        <div className="content-wrapper">
          <h2>Brain Health</h2>
        </div>

        <div className="healthy-brain-content">
          {/* <Route path="/healthy-foods" /> */}
          <a href="/healthy-foods" value="0">
            <div className="image-wrapper">
              <h3 className="health-brain">Health Foods</h3>
            </div>
          </a>

          {/* <Route path="/healthy-sounds" /> */}
          <a href="/healthy-sounds" value="0">
            <div className="image-wrapper">
              <h3 className="health-brain">Health Sounds</h3>
            </div>
          </a>

          {/* <Route path="/healthy-memory" /> */}
          <a href="/healthy-memory" value="0">
            <div className="image-wrapper">
              <h3 className="health-brain">Health Memory</h3>
            </div>
          </a>

          {/* <Route path="/healthy-movement" /> */}
          <a href="/healthy-movement" value="0">
            <div className="image-wrapper">
              <h3 className="health-brain">Health Movements</h3>
            </div>
          </a>
        </div>
      </div>
    )
  };
}

