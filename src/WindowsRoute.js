import React, { Component, useState } from 'react';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { Grid, IconButton } from '@material-ui/core';
import LeftNav from './Components/LeftNav/LeftNav';
import ProfilePage from './Components/DisplayContent/ProfilePage';
import { Route } from 'react-router-dom';
import HomePage from './Components/DisplayContent/HomePage';
import LibraryPage from './Components/DisplayContent/LibraryPage';
import SearchPage from './Components/DisplayContent/SearchPage';
import Playlist from './Components/DisplayContent/Playlist';
import { render } from '@testing-library/react';

class WindowsRoute extends Component {
	state = {
		currentPlaylist: {},
	};
	changeCurrentPlaylist = (playlist) => {
		this.setState({ currentPlaylist: playlist });
	};
	render() {
		const {
			colorMode,
			userPlaylists,
			changeColorMode,
			userInfo,
			access_token,
		} = this.props;
		return (
			<Grid item xs={12}>
				<Grid item className="a">
					<IconButton onClick={() => changeColorMode()}>
						<NightsStayIcon
							className={`colorMode-c${colorMode === 'Dark' ? 'l' : 'd'}`}
						/>
					</IconButton>
				</Grid>
				<Grid item xs={12} className="b" container>
					<LeftNav colorMode={colorMode} userPlaylists={userPlaylists} />
					<Grid
						item
						xs={12}
						sm={8}
						className={`right-cont ${colorMode === 'Dark' ? 'light' : 'dark'}`}
					>
						<Route path="/page=profile">
							<ProfilePage userInfo={userInfo} userPlaylists={userPlaylists} />
						</Route>
						<Route path="/page=home">
							<HomePage />
						</Route>
						<Route path="/page=library">
							<LibraryPage />
						</Route>
						<Route path="/page=search">
							<SearchPage />
						</Route>
						<Route path="/page=playlist">
							<Playlist access_token={access_token} />
						</Route>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default WindowsRoute;
