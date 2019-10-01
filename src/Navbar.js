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

	return (
		<nav className="dt w-100 pa3 center navbar"> 
	        <div className="dtc pa3">
	          <a href="/" id="name" className="dib pa1 grow-large fw1 logo">
	            UW - Live Well!</a>
	        </div>
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
	          	props.signout===true ?
	          	<p className="f4 fw3 hover-black no-underline black-70 dib ml2 pv1 ph3 ba pointer">
	          	 Sign Out </p> 
		          : null
		      }
	        </div>
      </nav> 
	);
}

export default withRouter(Navbar);