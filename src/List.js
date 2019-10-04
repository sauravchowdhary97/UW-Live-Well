import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import './slide.css';

const initialState = {
	email: ''
}

class List extends Component
{
	constructor(props) 
	{
		super(props);
		this.state = initialState;
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
							    <h1 className = "black-80 f1 fw2 ba pv2"> Listing Details </h1>
							    <form className="flex-col" onSubmit={this.handleSubmit}>

							    	<label> Rent: 
							    	<i className="fa fa-envelope ph1" aria-hidden="true"></i>
							    	</label>
							    	<input name="email" type="email" className="input-box" required 
							    		placeholder="Email address" onChange={this.handleChange}
							    		/>
							    	<br/>
							    	<label> Availibility: 
							    	<i className="fa fa-user ph1" aria-hidden="true"></i>
							    	</label>
							    	<input name="name" type="text" className="input-box" required 
							    		placeholder="Full Name" onChange={this.handleChange}/>
							    	<br/>
							    	<label> Sharing Preferences <i className="fa fa-lock ph1" aria-hidden="true"></i> </label>
							    	<input name="password" type="password" className="input-box" required
							    		placeholder="Password" onChange={this.handleChange}/>
							    	<br/>
							    	<label> Pets <i className="fa fa-lock ph1" aria-hidden="true"></i> </label>
							    	<input name="confirmPassword" type="password" className="input-box" required
							    		placeholder="Confirm Password" onChange={this.handleChange}/>

							    	<label> Rooms: 
							    	<i className="fa fa-envelope ph1" aria-hidden="true"></i>
							    	</label>
							    	<input name="email" type="email" className="input-box" required 
							    		placeholder="Email address" onChange={this.handleChange}
							    		/>
							    	<br/>

							    	<label> Other Details: 
							    	<i className="fa fa-envelope ph1" aria-hidden="true"></i>
							    	</label>
							    	<input name="email" type="email" className="input-box" required 
							    		placeholder="Email address" onChange={this.handleChange}
							    		/>
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
