import React from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { withRouter } from 'react-router';
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios.delete("https://api.devcamp.space/logout", {withCredentials : true})
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
        
        <h1>Smart Head Co.</h1>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink className="active" to="/scheduling">Scheduling</NavLink>
            <NavLink className="active" to="/blog">Blog</NavLink>

            {props.loggedInStatus === "LOGGED_IN" ? (
              dynamicLink("/blog-manager", "Blog Manager")
            ) : null}
          </div>

          <div className="auth-login">
            Tonya Remillard

            {props.loggedInStatus === 'LOGGED_IN' ? <a onClick={handleSignOut}>
              <FontAwesomeIcon icon="sign-out-alt" />
            </a> : null}

          </div>
      </div>
    </div>
  )
}

export default withRouter(NavigationComponent);