import { Grid } from '@material-ui/core';
import React from 'react';

export default function PlaylistTracks(props) {
	console.log(props.currentTracks);
	const trackHeadingLengths = [
		{ length: 1, heading: '#' },
		{ length: 4, heading: 'Title' },
		{ length: 3, heading: 'Album' },
		{ length: 3, heading: 'Date Added' },
		{ length: 1, heading: '🕛' },
	];
	return (
		<Grid item container spacing={4}>
			<Grid item container xs={12} direction="row">
				{trackHeadingLengths.map((t) => {
					return (
						<Grid item xs={t.length} style={{ color: 'white' }}>
							{t.heading}
						</Grid>
					);
				})}
			</Grid>
			<Grid item container xs={12} direction="column" spacing={2}>
				{props.currentTracks.map((track, index) => {
					const { album, artists, name, duration_ms } = track.track;
					return (
						<Grid item xs={12} direction="row" container>
							<Grid
								xs={trackHeadingLengths[0].length}
								item
								style={{ color: 'white' }}
							>
								{index + 1}
							</Grid>
							<Grid
								xs={trackHeadingLengths[1].length}
								item
								style={{ color: 'white' }}
							>
								{name}
							</Grid>
							<Grid
								xs={trackHeadingLengths[2].length}
								item
								style={{ color: 'white' }}
							>
								{album.name}
							</Grid>
							<Grid
								xs={trackHeadingLengths[3].length}
								item
								style={{ color: 'white' }}
							>
								{track?.added_at.slice(0, 10)}
							</Grid>
							<Grid
								xs={trackHeadingLengths[4].length}
								item
								style={{ color: 'white' }}
							>
								{(Math.floor((duration_ms / 1000) % 60) / 100, 1).toFixed(2) +
									Math.floor(duration_ms / 1000 / 60)}
							</Grid>
						</Grid>
					);
				})}
			</Grid>
		</Grid>
	);
}
