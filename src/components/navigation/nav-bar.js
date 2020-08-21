import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from './navigation';

const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    )
  }

  const handleSignOut = () => {
    axios.delete("https://localhost:5000/logout", {withCredentials : true})
    .then(response => {
      if (response.status === 200) {
        props.history.push("/");
        props.handlSuccessfullLogout();
      }
      return response.data;
    })
    .catch(error => {
      console.log("Error signing out", error);
    });
  };

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

export default withRouter(NavigationComponent);