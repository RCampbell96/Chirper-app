import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import AppNavBar from './components/AppNavBar'
import Login from './components/Login'
import Register from './components/Register'
import Chirp from './components/Chirp'



class App extends Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <Router>
          <Route exact path="/" render={
            () => {
              return (
                <Login />
                )
            }
          } />
          <Route exact path="/register" render={
            () => {
              return (<Register />)
            }
          } />
          <Route exact path="/feed" render={
            () => {
              return (<Chirp />)
            }
          } />
        </Router>
      </div>
    );
  }
}

export default App;
