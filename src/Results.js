import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from "./Navbar";
import './Profile.css';

const initialState = {
	email: '',
	results: ''
};

class Results extends Component 
{
	constructor(props) 
	{
	  super(props);
	  this.state = initialState;
	  console.log(props, "Results page props");
	  if(props.location.state!==undefined)
	  {
	  	this.state.email = props.location.state.email;
	  }
	  this.state.results = props.location.state.results;
	  console.log(this.state.results);
	}

	handleFavClick = (event) =>
	{
		const id = event.target.id;
		fetch('http://localhost:3000/newFav', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email,
					id: id
				})
			})
			.then(res => res.json())
			.then(data => {
				if(data)
				{
					console.log(data);
					alert("Successfully marked!");
				}
				else
					alert("Couldn't mark favorite. Try again!")
			})
			.catch(err => { console.log(err)});
	}

	render() 
	{
	  return (
	  	<div>
	  		<Navbar />
	  		<div className='tc background'>
	  		<div className='sheet'>
	  		<span style={{color: '#800000'}} className='sub-header'>
					 Listings </span>
	  		<div className = "black-80 ba-white bl listings pv4 flex flex-wrap">
			{
				this.state.results.map(data => 
             		<article key={data.id} className="br2 ba dark-gray b--black-50 mv4 w-100 mw6 center">
					  <img src={data.image}
					    className="db w-100 br2 br--top" 
					  	alt="Just another building"/>
					  <div className="pa2 ph3-ns pb3-ns">
					    <div className="dt w-100 mt1">
					      <div className="dtc">
					        <h1 className="f4 f4-ns mv0 black-70">Name : "
					        	{ data.propertyname}"
					        </h1>
					      </div>
					      <div className="dtc tr">
					        <h2 className="f4 mv0 black-80">Rent: $
					        	{data.rent}
					        </h2>
					      </div>
					    </div>
					    <p className="f4 lh-copy measure mt2 black-70">
					     Rooms: {data.rooms}
					     <br/>
					     Sharing Preference: {data.sharing}
					     <br/>
					     Pets: {data.pets}
					    </p>
					    {
					    	this.state.email!=='' ?
					    <button id = {data.id} type="button" className="pointer br2
					     ba b--dark-green bg-green white pa2 ml1 mv1 
					     bg-animate hover-bg-dark-green border-box"
					     onClick = {this.handleFavClick}>
					     	Mark as Favorite </button>
					     	: null
					     }
					  </div>
					</article>
       			)
			}
			</div>
			</div>
	  		</div>
	  	</div>
	)}
}

export default withRouter(Results);