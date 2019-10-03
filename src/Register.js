import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import './slide.css';

//connect to backend and validate on submit
// check for invalidation inputs acc to Bootstrap framework
const initialState = {
	email: "",
	password: "",
	confirmPassword: "",
	phoneNumber: "",
	checkbox: false
};

class Register extends Component
{
	constructor(props) 
	{
	  super(props);
	  this.state = initialState;
	  console.log("Register props-->", props);
	}

	handleSubmit = (event) => 
	{
		event.preventDefault();
		console.log(this.state);

		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				confirmPassword: this.confirmPassword,
				phoneNumber: this.phoneNumber,
				checkbox: this.checkbox
			})
		})
		.then(res => res.json())
		.then(user => {
			if(user)
			{
				//this.props.loadUser(user);
				this.props.history.push("/profile");
			}
			else
				console.log(user);
		})
	}

	handleChange = async (event) =>
	{
		const { name, value } = event.target;
		await this.setState({ [name]: value });  // dynamically update the state values
		console.log(this.state);
	}

	check = async (event) => 
	{
		const x = document.getElementById("check").checked;
    	document.getElementById("check").checked = x===true ? false : true;
    	await this.setState({checkbox: document.getElementById("check").checked});
    	console.log(this.state);
	}

	render()
	{
		return (
			<div className = "background ">
		    	<div className = "sheet">
		    		<Navbar register={false}/>
		    		<div className="flex-wrapper">
						<div className="sans-serif signin-form black-90">
							<div className = "form-div ba flex-col">
							    <h1 className = "black-80 f1 fw2 ba pv2"> Register </h1>
							    <form className="flex-col" onSubmit={this.handleSubmit}>

							    	<label> Email 
							    	<i className="fa fa-user ph1" aria-hidden="true"></i>
							    	</label>
							    	<input name="email" type="email" className="input-box" required 
							    		placeholder="Email address" onChange={this.handleChange}
							    		/>
							    	<br/>
							    	<label> Phone Number 
							    	<i className="fa fa-phone ph1" aria-hidden="true"></i>
							    	</label>
							    	<input name="phoneNumber" type="number" className="input-box" required 
							    		placeholder="Phone Number" onChange={this.handleChange}/>
							    	<br/>
							    	<label> Password <i className="fa fa-lock ph1" aria-hidden="true"></i> </label>
							    	<input name="password" type="password" className="input-box" required
							    		placeholder="Password" onChange={this.handleChange}/>
							    	<br/>
							    	<label> Confirm Password <i className="fa fa-lock ph1" aria-hidden="true"></i> </label>
							    	<input name="confirmPassword" type="password" className="input-box" required
							    		placeholder="Confirm Password" onChange={this.handleChange}/>

							    	<div className="checkbox" onClick={this.check}>
							    		<input id="check" type="checkbox" name="checkbox"
							    			onClick={this.check}/> Keep me logged in
							    	</div>
							    	<input className = "button" type="submit" value="Register"
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

export default withRouter(Register);