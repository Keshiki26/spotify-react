import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './PlaylistComp.css';

export default function PlaylistDesc(props) {
	const { description, name, followers, owner } = props.pDesc;
	const images = props.pDesc.images || [''];
	return (
		<Grid item container alignItems="flex-end" justify="center">
			<Grid
				item
				direction="row"
				container
				justify="flex-start"
				alignItems="center"
				spacing={4}
			>
				<Grid
					item
					xs={5}
					className="playlistP-playlistImage-cont"
					justify="center"
					alignItems="center"
					container
				>
					<Grid
						item
						className="playlistP-playlistImage"
						style={{
							backgroundImage: `url(${images[0]?.url})`,
						}}
					></Grid>
				</Grid>
				<Grid xs={7} item container justify="flex-start">
					<p style={{ color: 'white' }}>PLAYLIST</p>
					<Typography color="secondary" variant="h1">
						{name}
					</Typography>
					<p style={{ color: 'white' }}>{description}</p>
				</Grid>
			</Grid>
		</Grid>
	);
}
