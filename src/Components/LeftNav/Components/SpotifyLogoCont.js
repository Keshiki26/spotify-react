import React from 'react';
import { Grid } from '@material-ui/core';
import { ReactComponent as SpotifyLogo } from './spotifylogo.svg';

export default function SpotifyLogoCont(props) {
	return (
		<Grid
			item
			className="left-logo-cont"
			container
			justify="center"
			alignItems="center"
		>
			<SpotifyLogo
				className={`spotify-logo ${
					props.colorMode === 'Dark' ? 'slogodark' : 'slogolight'
				}`}
			/>
		</Grid>
	);
}
