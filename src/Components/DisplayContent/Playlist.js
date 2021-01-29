import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
import PlaylistDesc from './Components/PlaylistPage/PlaylistDesc';
import PlaylistTracks from './Components/PlaylistPage/PlaylistTracks';

class Playlist extends Component {
	state = {
		playlistId: '',
		currentPlaylist: {},
		currentTracks: [],
	};

	getPlaylistInfo = () => {
		const playlistId = this.props.cu;
		this.setState({ playlistId });
		axios
			.create({
				headers: { Authorization: 'Bearer ' + this.props.access_token },
			})
			.get(`https://api.spotify.com/v1/playlists/${playlistId}`)
			.then((r) => {
				console.log(r.data);
				this.setState({ currentPlaylist: r.data });
				this.setState({ currentTracks: r.data.tracks.items });
			});
	};

	render() {
		if (this.state.playlistId !== this.props.cu) {
			this.getPlaylistInfo();
		}
		const {
			description,
			name,
			images,
			owner,
			followers,
			external_urls,
		} = this.state.currentPlaylist;

		return (
			this.state.currentPlaylist !== {} && (
				<Grid item xs={12} container direction="column">
					<PlaylistDesc
						pDesc={{ description, name, followers, owner, images }}
					/>
					<PlaylistTracks currentTracks={this.state.currentTracks} />
				</Grid>
			)
		);
	}
}
export default withRouter(Playlist);
