import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import LeftNavigation from './Components/LeftNavigation';
import LeftPlaylistList from './Components/LeftPlaylistList';
import SpotifyLogoCont from './Components/SpotifyLogoCont';
import './LeftNav.css';

export default class LeftNav extends Component {
	render() {
		const colorMode = this.props.colorMode;
		return (
			<Grid
				item
				sm={4}
				className={`left-cont-${colorMode === 'Dark' ? 'dark' : 'light'}`}
				container
				direction="column"
			>
				<SpotifyLogoCont colorMode={colorMode} />
				<LeftNavigation />
				<LeftPlaylistList userPlaylists={this.props.userPlaylists} />
				<Grid item className="left-bot-cont"></Grid>
			</Grid>
		);
	}
}
