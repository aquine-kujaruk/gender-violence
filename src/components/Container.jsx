import React from 'react';
import {Box, Grid, makeStyles} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	headerContainer: {
		height: theme.mixins.toolbar.minHeight + 8
	},
	container: {
		height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 8 + 60}px)`,
		width: '100vw',
		borderBottomRightRadius: 24,
		borderBottomLeftRadius: 24,
		overflow: 'hidden',
		backgroundColor: 'transparent',
		'&.full-height': {
			height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 8}px)`,
			borderRadius: 0
		}
	},
	footer: {
		height: 60
	}
}));

const Container = (props) => {
	const {children, button, backgroundColor = '#ff5f2b', frontbgColor} = props;

	const classes = useStyle();

	return (
		<Grid container style={{backgroundColor}}>
			<Grid item>
				<Box width="100vw" className={classes.headerContainer} display="flex" />
			</Grid>
			<Grid item>
				<Box
					position="relative"
					className={`${classes.container} ${button ? '' : 'full-height'}`}
					style={
						frontbgColor
							? {backgroundColor: frontbgColor}
							: {backgroundColor: button ? '#ff5f2b' : 'transparent'}
					}
				>
					{children}
				</Box>
			</Grid>
			{button && (
				<Grid item>
					<Box
						width="100vw"
						className={classes.footer}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						{button}
					</Box>
				</Grid>
			)}
		</Grid>
	);
};

export default Container;
