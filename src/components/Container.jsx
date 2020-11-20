import React from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import Dots from '../components/Dots';
import ButtonCustom from './ButtonCustom';
import {Link} from 'react-router-dom';

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
			height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 8}px)`
		}
	},
	footer: {
		height: 60
	}
}));

const Container = (props) => {
	const {children, uri, textButton, backgroundColor = '#ff5f2b'} = props;

	const classes = useStyle();

	return (
		<Grid container style={{backgroundColor}}>
			<Grid item>
				<Box width="100vw" className={classes.headerContainer} display="flex" />
			</Grid>
			<Grid item>
				<Box
					position="relative"
					className={`${classes.container} ${textButton ? '' : 'full-height'}`}
					style={{backgroundColor: textButton ? '#ff5f2b' : 'transparent'}}
				>
					{children}
				</Box>
			</Grid>
			{textButton && (
				<Grid item>
					<Box
						width="100vw"
						className={classes.footer}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<ButtonCustom component={Link} to={uri} type="circular">
							<Typography className={classes.buttonText} variant="subtitle1">
								{textButton}
							</Typography>
						</ButtonCustom>
					</Box>
				</Grid>
			)}
		</Grid>
	);
};

export default Container;
