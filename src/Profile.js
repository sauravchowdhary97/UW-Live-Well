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

						<div className = "black-80 ba fav-listings pv4">
							HEYYYY
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Profile);