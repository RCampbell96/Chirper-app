import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppNavBar from './components/AppNavBar'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {
  Button,
  Container, 
  Form, 
  FormGroup, 
  Label,
  ListGroup,
  ListGroupItem, 
  Input, 
  FormText
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <Router>
          <Route exact path="/" render={
            () => {
              return (
                <Form action="/" method="POST">
                  <h1>Welcome To Chirper</h1>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="userEmail" placeholder="Email Address" />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input type="password" name="password" id="userPassword" placeholder="Password" />
                </FormGroup>
                <Button>Login</Button>
                </Form>
                )
            }
          } />

          <Route exact path="/register" render={
            () => {
              return (<h1>Make an account here!</h1>)
            }
          } />

          <Route exact path="/feed" render={
            () => {
              return (<h1>Chirp Chirp</h1>)
            }
          } />
        </Router>
      </div>
    );
  }
}

export default App;
