import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import './slide.css';

//Need to handlesubmit to back end to send data
const initialState = {
	email: "",
	password: "",
	checkbox: false,
};

class SignIn extends Component 
{
	constructor(props) 
	{
	  super(props);
	  this.state = initialState;
	  console.log("Signin props-->", props);
	}

	handleSubmit = (event) => 
	{
		event.preventDefault();
		
		console.log(this.state);
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data.id)
				this.props.history.push("/profile");
			else
				console.log(data);
		})
		this.setState({email: '', password: ''});
	}

	handleChange = async (event) =>
	{
		const { name, value } = event.target;
		await this.setState({ [name]: value });
		console.log(this.state);
	}

	check = async (event) => 
	{
		const x = document.getElementById("check").checked;
    	document.getElementById("check").checked = x===true ? false : true;
    	await this.setState({checkbox: document.getElementById("check").checked});
	}

	render() 
	{ 
	    return (
	    	<div className = "background ">
		    	<div className = "sheet">
		    		<Navbar signin={false}/>
		    		<div className="flex-wrapper">
						<div className="sans-serif signin-form black-90">
							<div className = "form-div ba flex-col">
							    <h1 className = "black-80 f1 fw2 ba pv2 header"> Sign In </h1>
							    <form className="flex-col" onSubmit={this.handleSubmit}>

							    	<label> Email 
							    	<i className="fa fa-user ph1" aria-hidden="true"></i>
							    	</label>
							    	<input name="email" type="email" className="input-box" required 
							    		placeholder="Email address" onChange={this.handleChange}/>
							    	<br/>
							    	<label> Password <i className="fa fa-lock ph1" aria-hidden="true"></i> </label>
							    	<input name="password" type="password" className="input-box" required
							    		placeholder="Password" onChange={this.handleChange}/>

							    	<div className="checkbox" onClick={this.check}>
							    		<input id="check" type="checkbox" name="checkbox"
							    			onClick={this.check}/> Keep me logged in
							    	</div>
							    	<input className = "button" type="submit" value="Sign In"
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

export default withRouter(SignIn);