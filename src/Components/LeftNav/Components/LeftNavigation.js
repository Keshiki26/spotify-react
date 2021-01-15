import { Grid, IconButton, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import React from 'react';
import { Home } from '@material-ui/icons';

export default function LeftNavigation() {
	return (
		<Grid item className="left-top-cont" container>
			<Grid
				item
				xs={12}
				className="left-top-contents"
				container
				direction="row"
			>
				<HomeIcon fontSize="large" />
				<Typography className="left-top-contents-text">Home</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				container
				direction="row"
				className="left-top-contents"
			>
				<SearchIcon fontSize="large" />
				<Typography className="left-top-contents-text">Search</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				container
				direction="row"
				className="left-top-contents"
			>
				<LibraryBooksIcon fontSize="large" />
				<Typography className="left-top-contents-text">Your Library</Typography>
			</Grid>
		</Grid>
	);
}
