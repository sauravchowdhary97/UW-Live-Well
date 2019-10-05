import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from "./Navbar";
import './search.css';

const initialState = {
	email: '',
	minrent: '',
	maxrent: '',
	sharing: '',
	rooms: '',
	pets: ''

};

class Search extends Component 
{
	constructor(props) 
	{
	  super(props);
	  this.state = initialState;
	  if(props.location.state!==undefined)
	  {
	  	this.state.email = props.location.state.email;
	  }
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value});
	}

	handleSubmitFilter = (event) => {
		if(this.state.minrent==='' || this.state.maxrent==='' 
			|| this.state.pets==='' || this.state.sharing===''
			|| this.state.rooms==='')
			alert("Please select all filters before applying!");
		else
		{
			fetch('http://localhost:3000/searchListings', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					state: this.state
				})
			})
			.then(res => res.json())
			.then(data => {
				this.props.history.push('/results', {
					email: this.state.email,
					results: data
				});
			})
			.catch(err => { console.log(err)});
		}
	}

	handleSubmit = (event) => {
		fetch('http://localhost:3000/searchListings', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
				})
			})
			.then(res => res.json())
			.then(data => {
				this.props.history.push('/results', {
					email: this.state.email,
					results: data
				});
			})
			.catch(err => { console.log(err)});
	}

	render() 
	{
	  return (
	  	<div>
	  		<Navbar />
	  		<div className="background-search">
	  			<div className="sheet-search white-90 tc">
	  				<div className="pt4">
		  				<p className="search-text fw1"> 
		  					Search for your ideal property </p>
		  			</div>

	  				<div className = "pt3 filter-area">
	  					<input name="minrent" 
	  						type="number" 
		  					className="search-input-box" required 
							placeholder="Min rent" 
							onChange={this.handleChange}
						/>
						<input name="maxrent" type="number" 
		  					className="search-input-box" required 
							placeholder="Max rent" 
							onChange={this.handleChange}
						/>
						<input name="rooms" type="number" 
		  					className="search-input-box" required 
							placeholder="# of rooms" 
							onChange={this.handleChange}
						/>
						<br/>

						<div className="mt3">
							<span className="mt3">Sharing Preferences: </span>
					    	<input type="radio" name="sharing" 
					    		value="male" onClick={this.handleChange}/> 
					    	<span className="mr3"> Male </span>
							<input type="radio" name="sharing" 
								value="female" onClick={this.handleChange}
							/> Female
						</div>
						<br/>

						<div className="mt1">
							<span className="mt3">Pets: </span>
					    	<input type="radio" name="pets" 
					    		value="yes" onClick={this.handleChange}/> 
					    	<span className="mr3"> Yes </span>
							<input type="radio" name="pets" 
								value="no" onClick={this.handleChange}
							/> No
						</div>

						<div className="mt3">
						<input className = "pointer mt3 filter-button" 
							type="submit" value="Apply filters"
							   onClick = {this.handleSubmitFilter}/>
						</div>

						<p className="search-subtext ttu mt3">
						OR </p>

						<div className="mt3">
						<input className = "pointer mt3 filter-button" 
							type="submit" value="View All"
							   onClick = {this.handleSubmit}/>
						</div>
	  				</div>
	  			</div>
	  		</div>
	  	</div>
	)}
}

export default withRouter(Search);