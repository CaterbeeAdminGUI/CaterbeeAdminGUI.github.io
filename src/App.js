import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutUs';
import ReactDOM from 'react-dom';
import CustomNavbar from './components/navbar'
import Project from './pages/project'

class App extends Component {
  render() {
    return (
      <div>
      <CustomNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/follow-the-project" component={Project} />
      </Switch>
    </div>
    );
  }
}

export default App;
