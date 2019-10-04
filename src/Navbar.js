import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

const initialState = {
	email: ''
}

class Navbar extends Component
{
	constructor(props)
	{
		super(props);
		this.state = initialState;
		if(props.location.state!==undefined)
			this.state.email = this.props.location.state.email;
		console.log("Navbar", props);
	}

	handleSignInClick = () => {
		this.props.history.push("/signin");
	}

	handleRegisterClick = () => {
		this.props.history.push("/register");
	}
	//and make currentUser null or something (no sessions)
	handleSignOutClick = () => {
		this.props.history.push("/");
	}

	handleGreetingClick = () => {
		this.props.history.push("/profile");
	}

	handleListClick = () => {
		if(this.props.signin===false)
		{
			const tempEmail = this.state.email;
			this.props.history.push("/list", { email: tempEmail});

		}
		else
			this.props.history.push("/list");
	}

	handleProfileClick = () => {
		this.props.history.push("/profile", {email: this.state.email});
	}

	handleRentClick = () =>
	{
		this.props.history.push("/search", { email: this.state.email});
	}

	render() {
		return (
			<nav className="dt w-100 pa3 center navbar"> 
		        <div className="dtc pa3">
		          <a href="/" id="name" className="dib pa1 grow-large fw1 logo">
		            UW - Live Well!</a>
		        </div>
		        {
		        	this.props.profile===true ? 
		        		<div className ="bg- tc">
							        <p className="pointer f6 link ba bw1 ph3 
							        	pv2 mb2 dib dark-gray mt3 mh2 customButton" 
							        	onClick={this.handleListClick}>List a property</p>
							        <p className="pointer f6 link ba bw1 ph3 
							        	pv2 mb2 dib dark-gray mt3 mh2 customButton"
							        	onClick={this.handleRentClick}>Rent a Property</p>
						</div>
						: null
		        }
		        <div className="dtc v-mid tr pa3 sans-serif">
		          <p className="f4 fw3 hover-black no-underline black-70 dn dib-ns pv1 ph3 pointer" 
		          	 >How it works</p>
		          <p className="f4 fw3 hover-black no-underline black-70 dn dib-ns pv1 ph3 pointer" 
		          	 >Contact</p>
		          {
		          	this.props.register===false || this.state.email!=='' ? null : 
		          	<p className="f4 fw3 hover-black no-underline black-70 dn dib-ns pv1 ph3 pointer"
		          		onClick = {this.handleRegisterClick}> Register </p>
		          }

		          {
		          	this.props.signin===false || this.state.email!=='' ? null :
		          	<p className="f4 fw3 hover-black no-underline black-70 dib ml2 pv1 ph3 ba pointer"
			          	onClick = {this.handleSignInClick}> Sign In </p> 
			      }

			      {
		          	this.props.greeting!==undefined ?
		          	<p className="f4 fw3 hover-black no-underline black-70 dib ml2 pv1 ph3 pointer"
		          		onClick = {this.handleGreetingClick}>
		          	 Hello, {this.props.greeting} </p> 
			          : this.state.email!=='' ?
			      	 <p className="f4 fw3 hover-black no-underline black-70 dn dib-ns pv1 ph3 pointer" 
		          	 	onClick = {this.handleProfileClick}>Profile</p>
		          	 	: null
			      }

			      {
			      	//on click of sign out button should sign out and redirect to home page
		          	this.props.signout===true ?
		          	<p className="f4 fw3 hover-black no-underline black-70 dib ml2 pv1 ph3 ba pointer"
		          		onClick = {this.handleSignOutClick}>
		          	 Sign Out </p> 
			          : null
			      }
		        </div>
	      </nav> 
	)}
}

export default withRouter(Navbar);