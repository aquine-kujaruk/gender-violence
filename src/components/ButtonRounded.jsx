import React from 'react';
import {Button, makeStyles} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	button: {
		background: theme.palette.primary.main,
		color: 'white',
		borderRadius: 8,
		'&:hover': {
			background: theme.palette.primary.main
		}
	}
}));

const ButtonRounded = (props) => {
	const {children} = props;
	const classes = useStyle();
	return (
		<Button {...props} variant="container" className={classes.button}>
			{children}
		</Button>
	);
};

export default ButtonRounded;
