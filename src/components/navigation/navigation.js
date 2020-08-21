import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="navbar-wrapper">
        <div className="nav-bar">
          <h1>Smart Head</h1>
            <div className="nav-links">
              <NavLink to="/">Home</NavLink>
              <NavLink className="active" to="/scheduling">Scheduling</NavLink>
              <NavLink className="active" to="/blog">Blog</NavLink>

              {this.props.loggedInStatus === "LOGGED_IN" ? (
                dynamicLink("/blog-manager", "Blog Manager")
              ) : null}
              </div>

            <div className="auth-login">
              Tonya Remillard

              {this.props.loggedInStatus === 'LOGGED_IN' ? <a onClick={handleSignOut}>
                <FontAwesomeIcon icon="sign-out-alt" />
              </a> : null}
            </div>
        </div>
      </div>
    )
  }
} 