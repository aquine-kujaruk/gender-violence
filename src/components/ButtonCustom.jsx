import React from 'react';
import {Button, makeStyles} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	button: {
		background: theme.palette.primary.main,
		color: 'white',
		'&:hover': {
			background: theme.palette.primary.main
		},
		'&.circular': {
			borderRadius: 24,
			textTransform: 'none',
			padding: '4px 60px'
		},
		'&.rounded': {
			borderRadius: 8
		}
	}
}));

const ButtonCustom = (props) => {
	const {children, type} = props;
	const classes = useStyle();
	return (
		<Button {...props} variant="container" className={`${classes.button} ${type}`}>
			{children}
		</Button>
	);
};

export default ButtonCustom;
