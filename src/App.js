import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import Register from './Register';
import Profile from './Profile';
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

const loadUser = (user) =>
{
  this.setState({user: {
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    joined: user.joined
  }})
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
        </Switch>
      </div>
    );
  }
}

export default App;
