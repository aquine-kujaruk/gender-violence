import React from 'react';
import {Button, makeStyles} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	button: {
		maxWidth: 350,
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
	},
	outlined: {
		maxWidth: 350,
		borderRadius: 30,
		borderColor: '#ff5f2b'
	},
	disabled: {
		backgroundColor: '#e7e7e7'
	}
}));

const ButtonCustom = (props) => {
	const {children, variant, type, disabled} = props;
	const classes = useStyle();
	return (
		<Button
			{...props}
			className={
				variant === 'outlined'
					? classes.outlined
					: disabled
					? classes.disabled
					: `${classes.button} ${type}`
			}
		>
			{children}
		</Button>
	);
};

export default ButtonCustom;
