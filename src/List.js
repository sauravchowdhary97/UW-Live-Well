import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';

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
			<div>
				<Navbar />
			</div>
		);	
	}
}

export default withRouter(List);
