import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import loginUrl from './api.js';
import { Link } from 'react-router-dom';
import { ReactComponent as SpotifyLogo } from './Components/LeftNav/Components/spotifylogo.svg';
import './LoginPage.css';

export default function LoginPage(props) {
	return (
		<Grid
			item
			className="login-cont"
			container
			style={{
				color: props.colorMode === 'Dark' ? 'white' : 'black',
			}}
			justify="center"
			alignItems="flex-start"
		>
			<Grid item container justify="center" alignItems="center">
				<SpotifyLogo
					style={{ cursor: 'pointer' }}
					className={`spotify-logo ${
						props.colorMode === 'Dark' ? 'slogodark' : 'slogolight'
					}`}
					onClick={() => window.location.reload()}
				/>
			</Grid>

			<Grid
				item
				xs={8}
				container
				className="login-content"
				justify="center"
				direction="column"
				alignContent="center"
				spacing={4}
				style={{
					color: props.colorMode === 'Dark' ? 'white' : 'black',
				}}
			>
				<Grid
					item
					xs={12}
					container
					justify="center"
					className="login-text-cont"
				>
					<Typography className="login-text">
						To continue, please <strong>login</strong> to Spotify by{' '}
						<strong>clicking</strong> the button below
					</Typography>
				</Grid>
				<Grid item xs={12} container justify="center">
					<a href={loginUrl} className="login-button">
						Login with spotify
					</a>
				</Grid>
			</Grid>
		</Grid>
	);
}
