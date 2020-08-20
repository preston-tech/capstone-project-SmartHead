import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component {
  render(){
    return(
      <Navbar>
        <Nav>
          <div className="nav-wrapper">
            <div className="nav-link-wrapper">
              <NavLink exact to="/" activeClassName="nav-link-active">
                Home
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink exact to="/scheduling" activeClassName="nav-link-active">
                SH Schedule
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink exact to="/store" activeClassName="nav-link-active">
                SH Store
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink exact to="/school" activeClassName="nav-link-active">
                SH School
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink exact to="/sciences" activeClassName="nav-link-active">
                sciences
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink exact to="/blog" activeClassName="nav-link-active">
                Blog
              </NavLink>
            </div>
          </div>
        </Nav>
      </Navbar>
    )
  }
}