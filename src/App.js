import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutUs';
import CustomNavbar from './components/navbar'
import Project from './pages/project'

class App extends Component {
  render() {
    return (
      <div className="app-background">
      <CustomNavbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={About} />
        <Route exact path="/follow-the-project" component={Project} />
        <Route exact path="/" render={() => (<Redirect to="/home"/>) } />
      </Switch>
    </div>
    );
  }
}

export default App;
