import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import DisplayPlaylists from './Components/DisplayPlaylists';
import './DisplayCont.css';

export default function ProfilePage(props) {
	const { display_name, followers, external_urls, images } = props.userInfo;

	return (
		<Grid
			item
			container
			className="profile-cont"
			direction="column"
			spacing={4}
		>
			<Grid
				container
				item
				xs={12}
				justify="center"
				direction="column"
				className="profile-userinfo-cont"
			>
				<Grid
					container
					style={{ padding: '15px' }}
					xs={12}
					item
					className={`profile-top`}
				>
					<Grid
						item
						sm={4}
						container
						justify="center"
						style={{ padding: '20px' }}
					>
						<img
							className="profile-image"
							src={images[0].url}
							alt={display_name}
						/>
					</Grid>
					<Grid
						item
						sm={8}
						container
						className="profile-info-text"
						justify="center"
						alignItems="flex-start"
						direction="column"
					>
						<Typography
							style={{
								textTransform: 'uppercase',
								fontSize: '0.8em',
								fontWeight: '600',
								letterSpacing: '2px',
							}}
						>
							Profile{' '}
						</Typography>
						<Typography variant="h3" className="display-name">
							{display_name}
						</Typography>
						<p
							style={{
								fontWeight: '500',
							}}
						>
							{followers.total} Followers
						</p>
					</Grid>
				</Grid>
			</Grid>

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
