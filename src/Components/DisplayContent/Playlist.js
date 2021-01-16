import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import axios from 'axios';

export default class Playlist extends Component {
	state = {
		playlistId: '',
		currentPlaylist: {},
		currentTracks: [],
	};
	componentDidMount() {
		const playlistId = window.location.hash.split('=')[2];
		this.setState({ playlistId });
		const headers = {
			headers: { Authorization: 'Bearer ' + this.props.access_token },
		};
		console.log(this.props.access_token);
		axios
			.create(headers)
			.get(`https://api.spotify.com/v1/playlists/${playlistId}`)
			.then((r) => {
				this.setState({ currentPlaylist: r.data });
				this.setState({ currentTracks: r.data.tracks.items });
				console.log(r.data);
			});
	}
	render() {
		const {
			description,
			name,
			images,
			followers,
			external_urls,
		} = this.state.currentPlaylist;

		return (
			<Grid>
				{this.state.currentPlaylist !== {} && (
					<Grid>
						<p style={{ color: 'white' }}>{description}</p>
						<Grid>
							{this.state.currentTracks.map((track) => (
								<p style={{ color: 'white' }}>{track.track.name}</p>
							))}
						</Grid>
					</Grid>
				)}
			</Grid>
		);
	}
}
