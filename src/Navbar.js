import React from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
	console.log("Navbar", props);

	const handleSignInClick = () => {
		props.history.push("/signin");
	}

	const handleRegisterClick = () => {
		props.history.push("/register");
	}
	//and make currentUser null or something (no sessions)
	const handleSignOutClick = () => {
		props.history.push("/");
	}

	return (
		<nav className="dt w-100 pa3 center navbar"> 
	        <div className="dtc pa3">
	          <a href="/" id="name" className="dib pa1 grow-large fw1 logo">
	            UW - Live Well!</a>
	        </div>
	        {
	        	props.profile===true ? 
	        		<div className ="bg- tc">
						        <a className="f6 link ba bw1 ph3 pv2 mb2 dib dark-gray mt3 mh2 customButton" 
						        	href="#0">List a property</a>
						        <a className="f6 link ba bw1 ph3 pv2 mb2 dib dark-gray mt3 mh2 customButton"
						        	href="#0">Rent a Property</a>
					</div>
					: null
	        }
	        <div className="dtc v-mid tr pa3 sans-serif">
	          <p className="f4 fw3 hover-black no-underline black-70 dn dib-ns pv1 ph3 pointer" 
	          	 href="/" >How it works</p>
	          <p className="f4 fw3 hover-black no-underline black-70 dn dib-ns pv1 ph3 pointer" 
	          	 href="/" >Contact</p>
	          {
	          	props.register===false ? null : 
	          	<p className="f4 fw3 hover-black no-underline black-70 dn dib-ns pv1 ph3 pointer"
	          		onClick = {handleRegisterClick}> Register </p>
	          }

	          {
	          	props.signin===false ? null :
	          	<p className="f4 fw3 hover-black no-underline black-70 dib ml2 pv1 ph3 ba pointer"
		          	onClick = {handleSignInClick}> Sign In </p> 
		      }

		      {
	          	props.greeting!==undefined ?
	          	<p className="f4 fw3 hover-black no-underline black-70 dib ml2 pv1 ph3 pointer">
	          	 Hello, {props.greeting} </p> 
		          : null
		      }

		      {
		      	//on click of sign out button should sign out and redirect to home page
	          	props.signout===true ?
	          	<p className="f4 fw3 hover-black no-underline black-70 dib ml2 pv1 ph3 ba pointer"
	          		onClick = {handleSignOutClick}>
	          	 Sign Out </p> 
		          : null
		      }
	        </div>
      </nav> 
	);
}

export default withRouter(Navbar);