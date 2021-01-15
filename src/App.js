import './App.css';
import { loginUrl } from './api';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Grid, IconButton } from '@material-ui/core';
import LeftNav from './Components/LeftNav/LeftNav';
import NightsStayIcon from '@material-ui/icons/NightsStay';
// /#access_token=BQCPqe5K4sNm1Ml4XhG_sOedRBn2PNkO2uOhtR4b9b2fvQ3I3dEVpZOkpqgL8dO6j9h1DPOZEAjk7Eo69N8YFH7LvhqOwIAz5qjdfm5IhFtnMu2JcIvbLc350eboM3jF9pRe2qPQcM2gvwUUKT7N0DoX6w&token_type=Bearer&expires_in=3600
class App extends Component {
	state = {
		userInfo: null,
		userPlaylists: [],
		colorMode: 'Dark',
		contentPage: 'Profile',
	};

	componentDidMount = () => {
		const access_token = new URLSearchParams(
			window.location.hash.substring(1).split('&')[0]
		).get('access_token');
		window.location.hash = '';
		const headers = {
			headers: { Authorization: 'Bearer ' + access_token },
		};

		axios
			.create(headers)
			.get('https://api.spotify.com/v1/me')
			.then((r) => {
				this.setState({ userInfo: r.data });

				const id = r.data.uri.split(':')[2];

				axios
					.all([
						axios
							.create(headers)
							.get(`https://api.spotify.com/v1/users/${id}/playlists`),
					])
					.then(
						axios.spread((...responses) =>
							this.setState({ userPlaylists: responses[0].data.items })
						)
					);
			});
	};

	render() {
		const { colorMode, userPlaylists } = this.state;
		return (
			<Grid container className="whole-cont">
				<Grid item className="a">
					<IconButton
						onClick={() =>
							this.setState({
								colorMode: this.state.colorMode === 'Dark' ? 'Light' : 'Dark',
							})
						}
					>
						<NightsStayIcon
							className={`colorMode-c${colorMode === 'Dark' ? 'l' : 'd'}`}
						/>
					</IconButton>
					<a href={loginUrl}>Login</a>
				</Grid>
				<Grid item xs={12} className="b" container>
					<LeftNav colorMode={colorMode} userPlaylists={userPlaylists} />
					<Grid item sm={8} className="right-cont"></Grid>
				</Grid>

				{/* show user info */}
				{/* {userInfo && (
						<div
							style={{
								display: 'flex',
								padding: '10px',
								flexDirection: 'column',
								justifyContent: 'start',
								alignItems: 'center',
							}}
						>
							<p>User Info: </p>
							<a href={userInfo.external_urls?.spotify} target="_blank">
								<img src={userInfo.images[0].url} alt={userInfo.display_name} />
								{userInfo.display_name}
							</a>
							<p>Followers: {userInfo.followers?.total}</p>
						</div>
					)} */}

				{/* show user playlists */}
				{/* {userPlaylists.map((playlist, index) => {
						console.log(playlist);
						return (
							<p key={index}>
								<img src={playlist.images[0].url} alt={playlist.name} />
								<p>{playlist.name}</p>
							</p>
						);
					})} */}
			</Grid>
		);
	}
}
export default App;
