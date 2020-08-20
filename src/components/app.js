import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from "../components/navigation/footer";


import Home from './pages/home';
import Scheduling from './pages/scheduling';
import Store from './pages/store';
import School from './pages/school';
import Sciences from './pages/science';
import Blog from './pages/blog';
import Navbar from './navigation/nav-bar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <div className='container'>
            <Switch>
              <Route path="/" component={Home} exact />
                <Home/>
              <Route path="/scheduling" component={Scheduling} />

              <Route path="/blog" component={Blog} />
                <Blog/>
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}
