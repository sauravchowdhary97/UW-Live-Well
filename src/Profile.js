import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import './Profile.css';
import './slide.css';

//Need to handlesubmit to back end to send data
//remove button for fav listings
//questions/comments
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
					<Navbar profile={true} register={false} signin={false} signout={true} greeting={true}/>
					
					<div className="flex-container-row">
						<div className = "black-80 ml4 profile-info pv4">
							<div className = "flex-container-column">
								<div className = "sub-header">
									<i className='far fa-user-circle ml3 mr2'/>
									<span style={{fontSize: '50px', color: '#800000'}}> I'm </span>
									Saurav Chowdhary
								</div>
								<div className="sub-header">
									<i className="fa fa-envelope ml3 mr2" style={{fontSize: '50px', color: '#800000'}}/>
									<span className="black-70"> schowdhary@wisc.edu </span>
								</div>
								<div className="sub-header">
									<i className="fa fa-phone ml3 mr2" style={{fontSize: '50px', color: '#800000'}}/>
									<span className="black-70"> +1 608 733 9544 </span>
								</div>
								<div className="edit-button-area mt5">
								 	<a className="edit-button f6 link dim ph3 pv2 mb2 dib white" href="/">
								 	 Edit Details</a>
								</div>
							</div>
						</div>

						<div className = "black-80 ba-white bl fav-listings pv4 flex flex-wrap">
							<span style={{color: '#800000'}} className='sub-header'>
							 Favorite Listings </span>
								<article className="br2 ba dark-gray b--black-50 mv4 w-100 mw6 center">
								  <img src="https://www.madisoncampusanddowntownapartments.com/images/serialized/51821_l.jpg"
								  	className="db w-100 br2 br--top" 
								  	alt=" oapt."/>
								  <div className="pa2 ph3-ns pb3-ns">
								    <div className="dt w-100 mt1">
								      <div className="dtc">
								        <h1 className="f5 f4-ns mv0">Name: Lark at Kohl</h1>
								      </div>
								      <div className="dtc tr">
								        <h2 className="f5 mv0">$1,000</h2>
								      </div>
								    </div>
								    <p className="f6 lh-copy measure mt2 black-70">
								      Located at North Bedford Street, Lark at Kohl is situated right in the middle of campus!
								    </p>
								    {////onclick functionality
								}
								    <button type="button" className="pointer br2 ba b--dark-red bg-red white pa2 ml1 mv1 bg-animate hover-bg-dark-red border-box">Remove</button>
								  </div>
								</article>

								<article className="br2 ba dark-gray b--black-50 mv4 w-100 mw6 center">
								  <img src="https://cdngeneral.rentcafe.com/dmslivecafe/3/296856/4%20N%20Park%20St%20[Exterior]-3Cropped.jpg?crop=(76,11,261.37254901960716,174)&cropxunits=300&cropyunits=174&quality=85&scale=both&"
								  	className="db w-100 br2 br--top" 
								  	alt="apt."/>
								  <div className="pa2 ph3-ns pb3-ns">
								    <div className="dt w-100 mt1">
								      <div className="dtc">
								        <h1 className="f5 f4-ns mv0">Name: Park Regent</h1>
								      </div>
								      <div className="dtc tr">
								        <h2 className="f5 mv0">$800</h2>
								      </div>
								    </div>
								    <p className="f6 lh-copy measure mt2 black-70">
								      Located at North Park Street, Park Regent is situated right in the middle of campus!
								    </p>
								    <button type="button" className="pointer br2 ba b--dark-red bg-red white pa2 ml1 mv1 bg-animate hover-bg-dark-red border-box">Remove</button>
								  </div>
								</article>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Profile);