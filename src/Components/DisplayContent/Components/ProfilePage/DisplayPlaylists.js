import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import './DisplayPlaylists.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export default function DisplayPlaylists(props) {
	return props.userPlaylists.map((playlist) => {
		const { name, tracks, images, description, id } = playlist;
		console.log(playlist);
		return (
			<Grid
				item
				xs={4}
				sm={6}
				md={4}
				lg={3}
				container
				justify="flex-start"
				alignItems="center"
				className="displayPlaylist-cont"
			>
				<Link to={`/playlist/${id}`} className="profile-playlist-link">
					<Grid
						item
						className="playlist-img-cont"
						justify="center"
						alignItems="center"
						container
						style={{
							backgroundImage: `url(${images[0].url})`,
						}}
					></Grid>
				</Link>
				<Grid item container>
					<Link to={`/playlist/${id}`}>
						<p className="displayPlaylist-playlistNames">{name}</p>
					</Link>
				</Grid>
			</Grid>
		);
	});
}
