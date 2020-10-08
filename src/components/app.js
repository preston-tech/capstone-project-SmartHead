import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from "../components/navigation/footer";
import axios from "axios";

import Home from './pages/home';
import Scheduling from './pages/scheduling';
import Blog from './pages/blog';
import Navbar from './navigation/nav-bar';

import Login from './auth/login';
import Auth from './pages/auth';
import Icons from "../components/helper/icons";
import NavigationComponent from "../components/navigation/nav-bar";
import BlogManager from "./pages/blog-manager";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  checkLoginStatus() {
    return axios 
      .get("http://tonya.devcamp.space/logged_in", {
        withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.loggedIn;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route
        key="blog-manager"
        path="/blog-manager"
        component={BlogManager}
      />
    ];
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationComponent
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
          />
          <div className='container'>
            <Switch>
              <Route
                path="/auth"
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />
              <Route exact path="/" component={Home} />
              <Route path="/scheduling" component={Scheduling} />

              <Route path="/blog" 
              render={props => (
                <Blog {...props} loggedInStatus={this.state.loggedInStatus}/>
              )}
              />

              <Route
              path="/b/:slug"
              render={props => (
                <BlogDetail {...props} loggedInStatus={this.state.loggedInStatus}
                />
              )}
              />
              {this.state.loggedInStatus === "LOGGED_IN" ? (
                this.authorizedPages()
              ) : null}
              <Route exact path="/blog/b/:slug" component={Blog} />

            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}
