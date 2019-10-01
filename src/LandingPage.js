import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import "./LandingPage.css";
import Navbar from "./Navbar";
import 'tachyons';

const initialState = {};

class LandingPage extends Component 
{
	constructor(props) 
	{
	  super(props);
	  this.state = initialState;
	}

	render() 
	{
	  return (
	  	<div className = "landingPage cover bg-center">
			<header className="sans-serif">
			   	<div className="background-sheet pb5 pb6-m pb7-l">
			   		<Navbar />
			        <div className="tc mt4 mt5-m mt6-l ph3">
				        <h1 className="f2 f1-l fw2 black-90 mb0 lh-title">Welcome to
				        	<span className="main-msg"> UW - Live Well! </span> </h1>
				        <h2 className="fw2 f3 black-80 mt3 mb4 tc">
				        Search for your perfect room or roommate now.
				        </h2>
				        <br/>
				        <div className="f3 fw2 black "> I am looking to </div>
				        <div>
					        <a className="f6 link dim ba bw1 ph3 pv2 mb2 dib dark-gray mt3 mh2 customButton" 
					        	href="#0">Find a Roommate</a>
					        <a className="f6 link dim ba bw1 ph3 pv2 mb2 dib dark-gray mt3 mh2 customButton"
					        	href="#0">Find a Property</a>
				        </div>
			      </div>
			    </div>
			</header>
		</div>
	  );
	}
}

export default withRouter(LandingPage);
