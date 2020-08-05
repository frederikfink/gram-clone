import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from './components/layout/Feed';


import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import upload from './pages/upload';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
            <div style={{paddingTop: "64px"}}>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
              <Route exact path="/upload" component={upload} />
              </div>

            </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
