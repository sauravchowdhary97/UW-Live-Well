import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import './Profile.css';
import './slide.css';

//Need to handlesubmit to back end to send data
const initialState = {
	email: "",
	password: "",
	name: "",
};

class Profile extends Component 
{
	constructor(props) 
	{
	  super(props);
	  this.state = initialState;
	  console.log("Profile props-->", props);
	}

	render ()
	{
		return(
			<div className = "background">
				<div className = "sheet">
					<Navbar register={false} signin={false} signout={true} greeting={true}/>
				</div>
			</div>
		);
	}
}

export default Profile;