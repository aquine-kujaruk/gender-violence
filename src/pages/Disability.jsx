import React from 'react';
import {
	makeStyles,
	Button
} from '@material-ui/core';
import ElderlyImage from '../assets/adulto-mayor.jpg';

const useStyle = makeStyles((theme) => ({
	list: {
		width: '100%',
		maxWidth: 360,
		'& .MuiListItemText-primary': {
			fontWeight: 'bold',
			color: theme.palette.primary.main
		},
		'& .MuiListItemText-secondary': {
			fontSize: '1.3rem'
		}
	},
	text: {
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#ff5f2b',
		padding: '0 16px'
	},
	icon: {
		color: theme.palette.primary.main
	},
	downloadButtonContainer:{
	 "display": "flex",
     "flex": "1",
     "alignItems": "center",
     "justifyContent": "center",
     "marginTop": "-250px",
	 "marginBottom": "100px",
	 [theme.breakpoints.down('sm')]: {
		"marginTop": "-80px",
		"marginBottom": "50px",
	  },
	}
}));

const Disability = () => {
	const classes = useStyle();

	return (
		<div>
			<br/>
			<br/>
			<br/>
			<img width="100%" alt="" className={classes.imageHeader} src={ElderlyImage} />
			<div className={classes.downloadButtonContainer} >
			<Button target={'_blank'} href={'https://s3.us-east-2.amazonaws.com/dev.atuntaqui.shop/videos/DISCAPACIDAD.pdf'} variant="contained" color="primary">
			  DESCARGAR
      		</Button>
			</div>

			
		</div>
	);
};

export default Disability;
