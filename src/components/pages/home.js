import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../static/assets/images/smart-head.png";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Food from "../../../static/assets/images/food.svg";
import Sound from "../../../static/assets/images/headphones.svg";
import Memory from "../../../static/assets/images/memory.svg";
import Movement from "../../../static/assets/images/meditation.svg";

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
              <img src={Logo} />
              <h1>The Smart Head Company</h1>
              <h2>Mind over Matter</h2>
              <p>Smart Head is a community of like minded innovators committed to creating high
                vibrational minds through Brain Education.
              </p>
              <p>Scientists are condemning us for damaging the surface of our planet! We are degrading
                our soil, desertification (meaning expanding deserts), falling forests, wildlife floating
                these areas and drained peat lands. Scientists are telling us we MUST stop abusing our
                land to avoid catastrophic climate heating.
              </p>
              <p>Here is how we can be Smart Heads by being proactive for our planet;</p>
              <div className="be-smart-head">
                <li>
                  Covered lands means more vegitation covered with vegitation to protect us from overheating. Plants obsorb CO2 from the air and fix it in the soil.
                </li>
                <li>
                  Try adopting "regenerative farming" techniques - such as shallow ploughing, keeping the land covered in vegitation in the winter, and use drip-feed watering as an alternative.
                </li>
                <li>
                  Protect natural forests particularly in the tropics.
                </li>
                <li>
                  Change diets to eat less red meat and more vegitables.
                </li>
                <li>
                  Safeguard peatlands and restore them where possible.
                </li>
                <li>
                  Grow plants and trees to produce energy... but only on a small local scale.
                </li>
                <li>
                  Do more agro-foresty, where food crops are mixed in with trees.
                </li>
                <li>
                  Improve crop varieties.
                </li>
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
          <BrowserRouter>
            <Route path="/healthy-foods" />
            <a href="/healthy-foods" value="0">
              <div className="image-wrapper">
                <h3 className="health-brain">Health Foods</h3>
              </div>
            </a>

            <Route path="/healthy-sounds" />
            <a href="/healthy-sounds" value="0">
              <div className="image-wrapper">
                <h3 className="health-brain">Health Sounds</h3>
              </div>
            </a>

            <Route path="/healthy-memory" />
            <a href="/healthy-memory" value="0">
              <div className="image-wrapper">
                <h3 className="health-brain">Health Memory</h3>
              </div>
            </a>

            <Route path="/healthy-movement" />
            <a href="/healthy-movement" value="0">
              <div className="image-wrapper">
                <h3 className="health-brain">Health Movements</h3>
              </div>
            </a>
          </BrowserRouter>
        </div>
      </div>
    )
  };
}

