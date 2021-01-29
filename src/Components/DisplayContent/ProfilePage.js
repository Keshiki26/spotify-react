import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import DisplayPlaylists from './Components/ProfilePage/DisplayPlaylists';
import DisplayProfileInfo from './Components/ProfilePage/DisplayProfileInfo';
import './DisplayCont.css';

export default function ProfilePage(props) {
	return (
		<Grid
			item
			container
			className="profile-cont"
			direction="column"
			spacing={4}
		>
			<DisplayProfileInfo userInfo={props.userInfo} />
			<Grid item xs={12} container style={{ padding: '10px' }}>
				{props.userPlaylists.length > 0 && (
					<Grid item xs={12} container justify="center">
						<p className="public-playlist-heading">Public Playlists</p>
					</Grid>
				)}
				<DisplayPlaylists userPlaylists={props.userPlaylists} />
			</Grid>
		</Grid>
	);
}
