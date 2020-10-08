import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logo from "../../../static/assets/images/smart-head.png";


export default class Home extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="home-page">
          <div className="left">
            <img src={Logo} />
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
          <Route exact path="/healthy-foods" />
          <a href="/healthy-foods">
            <div className="image-wrapper">
              <div className="box-content">
                <h3 className="health-brain">Brain Smart Foods</h3>
              </div>
            </div>
          </a>

          <Route exact path="/healthy-sounds" />
          <a href="/healthy-sounds">
            <div className="image-wrapper">
              <div className="box-content">
                <h3 className="health-brain">Brain Smart Sounds</h3>
              </div>
            </div>
          </a>

          <Route exact path="/healthy-memory" />
          <a href="/healthy-puzzles">
            <div className="image-wrapper">
              <div className="box-content">
                <h3 className="health-brain">Brain Smart Puzzles</h3>
              </div>
            </div>
          </a>

          <Route exact path="/healthy-movement" />
          <a href="/healthy-movement">
            <div className="image-wrapper">
              <div className="box-content">
                <h3 className="health-brain">Brain Smart Movements</h3>
              </div>
            </div>
          </a>

          <Route exact path="/healthy-movement" />
          <a href="/healthy-Science">
            <div className="image-wrapper">
              <div className="box-content">
                <h3 className="health-brain">Brain Smart Science</h3>
              </div>
            </div>
          </a>

          <Route exact path="/healthy-movement" />
          <a href="/healthy-tech">
            <div className="image-wrapper">
              <div className="box-content">
                <h3 className="health-brain">Tech and Innovation</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
  };
}

