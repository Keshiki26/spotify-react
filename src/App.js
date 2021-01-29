import './App.css';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Grid, IconButton } from '@material-ui/core';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { withRouter } from 'react-router-dom';
import WindowsRoute from './WindowsRoute';
import LoginPage from './LoginPage';
// /#access_token=BQCPqe5K4sNm1Ml4XhG_sOedRBn2PNkO2uOhtR4b9b2fvQ3I3dEVpZOkpqgL8dO6j9h1DPOZEAjk7Eo69N8YFH7LvhqOwIAz5qjdfm5IhFtnMu2JcIvbLc350eboM3jF9pRe2qPQcM2gvwUUKT7N0DoX6w&token_type=Bearer&expires_in=3600

// Next Steps:
// 	Phase1
// 		UI for individual Playlists
// 		Add Links for the individual playlists properly all around
// 		Links => API call => UI for Home, Search and Library
// 		Fix up dark mode
// 		Test navigation and functionality + improve code
// 	Phase2
// 		Add a Player
// 		Change the left navigation to a drop down or something
// 		Add different color options than just dark/light

class App extends Component {
	state = {
		userInfo: null,
		access_token: '',
		userPlaylists: [],
		colorMode: 'Dark',
		contentPage: '',
	};

	componentDidMount = () => {
		const { match, location, history } = this.props;
		const access_token = new URLSearchParams(
			location.pathname.substring(1).split('&')[0]
		).get('access_token');
		const headers = {
			headers: { Authorization: 'Bearer ' + access_token },
		};

		axios
			.create(headers)
			.get('https://api.spotify.com/v1/me')
			.then((r) => {
				this.setState({ userInfo: r.data, access_token });
				const id = r.data.uri.split(':')[2];
				history.push('/profile');
				axios
					.create(headers)
					.get(`https://api.spotify.com/v1/users/${id}/playlists`)
					.then((response) => {
						this.setState({ userPlaylists: response.data.items });
					});
			});
	};
	changeColorMode = () => {
		this.setState({
			colorMode: this.state.colorMode === 'Dark' ? 'Light' : 'Dark',
		});
	};
	render() {
		const {
			colorMode,
			userPlaylists,
			userInfo,
			contentPage,
			access_token,
		} = this.state;
		return (
			<Grid container className="whole-cont">
				{userInfo !== null && (
					<WindowsRoute
						access_token={access_token}
						userInfo={userInfo}
						colorMode={colorMode}
						currentPage={contentPage}
						userPlaylists={userPlaylists}
						changeColorMode={this.changeColorMode}
					/>
				)}
				{userInfo === null && <LoginPage colorMode={colorMode} />}
			</Grid>
		);
	}
}
export default withRouter(App);

{
	/* show user info */
}
{
	/* {userInfo  &&   (
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
					)} */
}

{
	/* show user playlists */
}
{
	/* {userPlaylists.map((playlist, index) => {
						console.log(playlist);
						return (
							<p key={index}>
								<img src={playlist.images[0].url} alt={playlist.name} />
								<p>{playlist.name}</p>
							</p>
						);
					})} */
}
