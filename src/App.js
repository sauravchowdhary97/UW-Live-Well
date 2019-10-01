import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import Register from './Register';
import Profile from './Profile';
import './App.css';

const initialState = {
  currentUser: null
}

class App extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = initialState;
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
            render = { () => <Register /> }
          />

          <Route exact path = '/profile'
            render = { () => <Profile />} 
          />         
        </Switch>
      </div>
    );
  }
}

export default App;
