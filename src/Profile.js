import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import './Profile.css';
import './slide.css';

//Need to handlesubmit to back end to send data
//remove button for fav listings
//update user info
//questions/comments
const initialState = {
	email: "",
	password: "",
	name: "",
	joined: "",
	favListings: '',
	newPassword: ''
};

class Profile extends Component
{
	constructor(props) 
	{
	  super(props);
	  this.state = initialState;
	  if(props.location.state===undefined)
	  	props.history.push('/signin');
	  else
	  	this.state.email = props.location.state.email;
	}

	async componentDidMount() {
		await fetch('http://localhost:3000/details', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email
				})
			})
			.then(res => res.json())
			.then(data => {
				this.setState({name: data[0].name, email: data[0].email,
					joined: data[0].joined});
				//set state with data received from backend
			})
			.catch(err => { console.log(err)});

		var fav = '';
		await fetch('http://localhost:3000/getFavListings', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email
				})
			})
			.then(res => res.json())
			.then(data => {
				fav = data;
			})
			.catch(err => { console.log(err)});

		let fav2 = [];
		for(let i=0; i<fav.length; i++) {
			await fetch('http://localhost:3000/getListing', {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						id: fav[i].listingid
					})
				})
				.then(res => res.json())
				.then(data => {
					fav2.push(data[0]);
					this.setState({favListings: fav2});
				})
				.catch(err => { console.log(err)});
		}
	}

	handlePasswordChange = async (event) =>
	{
		const { name, value } = event.target;
		await this.setState({ [name]: value });  
	}

	toggleShowPassword = (event) => {
		document.getElementById('editPassDiv').style.display = 
			document.getElementById('editPassDiv').style.display === 'none' ? 'block' : 'none';
	}

	updatePassword = (event) => {
		//send new password to backend
		if(this.state.newPassword==="")
			alert("Enter the new password!");
		else
		{
			fetch('http://localhost:3000/update', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email,
					password: this.state.newPassword
				})
			})
			.then(res => res.json())
			.then(val => {
				if(val>0)
				{
					alert("Updated successfully!");
				}
				else
					console.log(val);
			})
			
			document.getElementById('editPassDiv').style.display = 
				document.getElementById('editPassDiv').style.display === 
					'none' ? 'block' : 'none';
		}
	}

	handleRemoveClick = (event) => {
		const id = event.target.id;
		let fav2 = this.state.favListings;

		for(let i=0; i<fav2.length; i++)
		{
			if(fav2[i].id == id)
			{
				fav2.splice(i,1);
				i--;
				break;
			}
		}
		this.setState({favListings: fav2});
	}

	render ()
	{
		return(
			<div className = "background">
				<div className = "sheet">
					<Navbar profile={true} register={false} signin={false} signout={true} greeting={this.state.name}/>
					
					<div className="flex-container-row">
						<div className = "black-80 ml4 profile-info pv4">
							<div className = "flex-container-column">
								<div className = "sub-header">
									<i className='far fa-user-circle ml3 mr2'/>
									<span style={{fontSize: '50px', color: '#800000'}}> I'm </span>
									{this.state.name}
								</div>
								<div className="sub-header">
									<i className="fa fa-envelope ml3 mr2" style={{fontSize: '50px', color: '#800000'}}/>
									<span className="black-70"> {this.state.email} </span>
								</div>
								<div className="sub-header">
									<i className="fa fa-calendar ml3 mr2" style={{fontSize: '50px', color: '#800000'}}/>
									<span className="black-70"> {this.state.joined} </span>
								</div>
								<div className="edit-button-area mt5">
								 	<p className="edit-button f6 link dim ph3 pv2 mb2 tc dib white pointer"
								 		onClick = {this.toggleShowPassword}> 
								 		Update Details
								 	</p>
								 	<div id = "editPassDiv" className="mt4" style={{display: 'none'}}>
								 		<label> New Password <i className="fa fa-lock ph1" aria-hidden="true"></i> </label>
							    		<input name="newPassword" type="password" className="input-box" required
							    			placeholder="Password" onChange={this.handlePasswordChange}/>
							    		<p className="update-button f8 link dim ph4 pv2 mb2 tc dib white pointer"
								 		onClick = {this.updatePassword}> 
								 		Update
								 		</p>
								 	</div>
								</div>
							</div>
						</div>

						<div className = "black-80 ba-white bl fav-listings pv4 flex flex-wrap">
							<span style={{color: '#800000'}} className='sub-header'>
							 	Favorite Listings </span>
							{
								this.state.favListings==='' ? null :
								this.state.favListings.map(data => 
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

									    <button id = {data.id} type="button" className="pointer br2
									     ba b--dark-red bg-red white pa2 ml1 mv1 
									     bg-animate hover-bg-dark-red border-box"
									     onClick = {this.handleRemoveClick}>
									     	Remove from Favorites 
									     </button>
									  </div>
									</article>
							)
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Profile);