import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import Register from './Register';
import Profile from './Profile';
import List from './List';
import './App.css';

const initialState = {
  currentUser: {
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    joined: ''
  }
}

class App extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = initialState;
  }

  componentDidMount () {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(console.log);
  }

  render()
  {
    return (
      <div>
        <Switch>
          <Route exact path = '/' 
            render = { () => <LandingPage currentUser={this.state.currentUser} /> }
          />

          <Route exact path = '/signin'
            render = { () => <SignIn />}
          />

          <Route exact path = '/register' 
            render = { () => <Register loadUser={this.loadUser}/> }
          />

          <Route exact path = '/profile'
            render = { () => <Profile />} 
          />

          <Route exact path = '/list'
            render = { () => <List />} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
