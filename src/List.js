import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import './slide.css';

const initialState = {
	email: '',
	rent: '',
	rooms: '',
	availibility: '',
	pets: '',
	sharing: '',
	propertyName: '',
	image: ''
}

class List extends Component
{
	constructor(props) 
	{
		super(props);
		this.state = initialState;
		if(props.location.state)
			this.state.email = props.location.state.email;
		else
			props.history.push('/signin');
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if(this.state.pets==="" || this.state.rent==="" || 
			this.state.rooms==="" || this.state.sharing==="" 
				|| this.state.availibility==="" || this.state.email==='')
					alert("Please fill all the details before listing!");
		else
		{
			fetch('http://localhost:3000/addListing', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					state: this.state
				})
			})
			.then(res => res.json())
			.then(data => {
				this.props.history.push('/profile', {email: this.state.email});
			})
			.catch(err => { console.log(err)});
		}
	}

	render()
	{
		return (
			<div className = "background">
				<div className = "sheet">
					<Navbar />
					<div className="flex-wrapper">
						<div className="sans-serif signin-form black-90">
							<div className = "form-div ba flex-col">
							    <h1 className = "black-80 f2 fw2 ba pv2"> 
							    	<i className="fa fa-home ph1" aria-hidden="true"></i>
							    	Listing Details 
							    	<i className="fa fa-home ph1" aria-hidden="true"></i>
							    </h1>
							    <form className="flex-col" onSubmit={this.handleSubmit}>
									
									<label> <i className="fa fa-home ph1" 
							    		aria-hidden="true"></i> <b><u>Property Name </u></b>
							    		<i className="fa fa-home ph1" 
							    		aria-hidden="true"></i>
							    	</label>
							    	<input name="propertyName" type="text" className="input-box input-box-list" required 
							    		placeholder="Enter property name" onChange={this.handleChange}
							    		/>
							    	<br/>

							    	<label> <i className="fas fa-image ph1" 
							    		aria-hidden="true"></i> <b><u>Image Address </u></b>
							    		<i className="fas fa-image ph1"></i>
							    	</label>
							    	<input name="image" type="text" className="input-box input-box-list" required 
							    		placeholder="Enter image address link" onChange={this.handleChange}
							    		/>
							    	<br/>

							    	<label> <i className="fas fa-dollar-sign ph1" 
							    		aria-hidden="true"></i> <b><u>Rent </u></b>
							    	<i className="fas fa-dollar-sign ph1" aria-hidden="true"></i>
							    	</label>
							    	<input name="rent" type="number" className="input-box input-box-list" required 
							    		placeholder="Rent amount" onChange={this.handleChange}
							    		/>
							    	<br/>

							    	<label> <b> <u>Number of rooms:</u></b>
							    	</label>
							    	<input name="rooms" type="number" className="input-box input-box-list" required 
							    		placeholder="Enter # of available rooms" onChange={this.handleChange}
							    		/>
							    	<br/>

							    	<label> &#10004; <b><u>Availibility: </u></b> &#10004;
							    	</label>
							    	<br/>
							    	<div>
								    	<input type="radio" name="availibility" value="yes" onClick={this.handleChange}/> 
								    		<span className="mr3"> Yes </span>
	  									<input type="radio" name="availibility" value="no" onClick={this.handleChange}/> No
  									</div>
							    	<br/>

							    	<label> <b> <u>Sharing Preferences</u></b> 
							    	<i className="fa fa-user ph1" aria-hidden="true"></i> </label>
							    	<br/>
							    	<div>
								    	<input type="radio" name="sharing" value="male" onClick={this.handleChange}/> 
								    		<span className="mr3"> Male </span>
	  									<input type="radio" name="sharing" value="female" onClick={this.handleChange}/> Female
  									</div>
							    	<br/>

							    	<label> <b> <u>Are pets allowed? </u></b> 
							    	<i className="fas fa-dog ph1" aria-hidden="true"></i> </label>
							    	<br/>
							    	<div>
								    	<input type="radio" name="pets" value="yes" onClick={this.handleChange}/> 
								    		<span className="mr3"> Yes </span>
	  									<input type="radio" name="pets" value="no" onClick={this.handleChange}/> 
	  										No
  									</div>
							    	<br/>

							    	<input className = "button" type="submit" value="List"
							    		onClick = {this.handleSubmit}/>
							    </form>
						    </div>
					    </div>
			    	</div>
	
				</div>
			</div>
		);	
	}
}

export default withRouter(List);
