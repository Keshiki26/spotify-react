import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

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
						<Link to={`/playlist/${playlist?.id}`}>
							<Typography className="left-bot-contents-text">
								{playlist.name}
							</Typography>
						</Link>
					</Grid>
				);
			})}{' '}
		</Grid>
	);
}
