import React, {Component} from 'react';

export default class Navbar extends Component {
  constructor() {
    super();
  }

  render(){
    return(
        <div className="navbar-wrapper">
          <div className="nav-bar">
            <h1>Smart Head</h1>
            <ul>
              <li><a href="#" className="btn">
                Home
              </a></li>
              <li><a href="#" className="btn">
                Schedule
              </a></li>
              {/* <li><a href="#" className="btn">
                Store
              </a></li> */}
              {/* <li><a href="#" className="btn">
                School
              </a></li> */}
              {/* <li><a href="#" className="btn">
                Sciences
              </a></li> */}
              <li><a href="#" className="btn">
                Blog
              </a></li>
            </ul>
          </div>
        </div>
    )
  }
}