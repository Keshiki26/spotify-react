import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import './DisplayPlaylists.css';

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
				<Grid
					item
					className="playlist-img-cont"
					style={{
						backgroundImage: `url(${images[0].url})`,
					}}
				></Grid>
				<Grid item container style={{ padding: '10px 0px' }}>
					<Link to={`/page=playlist/current?playlist=${id}`}>
						<p className="displayPlaylist-playlistNames">{name}</p>
					</Link>
				</Grid>
			</Grid>
		);
	});
}
