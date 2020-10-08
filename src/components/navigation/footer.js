import React, { Component } from 'react';
import Logo from "../../../static/assets/images/smart-head.png";


export default class Footer extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div className="footer">
        <div className="footer-wrapper">
        <img src={Logo}/>
          <div className="explore">
            <h2>Explore</h2> 
            <div className="explore-links">
              <a href="#">
                Home
              </a>

              <a href="#">
                Schedule
              </a>

              <a href="#">
                Blog
              </a>
            </div>  
          </div>

          <div className="brain-health">
            <h2>Health</h2>
            <div className="brain-health-footer">
              <a href="#">
                Health Foods
              </a>

              <a href="#">
                Health Sounds
              </a>

              <a href="#">
                Health Memory
              </a>

              <a href="#">
                Health Movements
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}