import { Grid, Typography } from '@material-ui/core';
import React from 'react';

export default function LeftPlaylistList(props) {
	return (
		<Grid item className="leftList-cont" container>
			{props.userPlaylists.map((playlist, index) => {
				return (
					<Grid
						item
						xs={12}
						className="left-bot-contents"
						container
						direction="row"
					>
						<Typography className="left-bot-contents-text">
							{playlist.name}
						</Typography>
					</Grid>
				);
			})}{' '}
		</Grid>
	);
}
