import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import Container from './../components/Container';
import longArrow from '../assets/long-arrow-white.png';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%',
		padding: '8%'
	},
	text: {
		fontWeight: 'bold',
		color: 'white'
	},
	textBody: {
		paddingTop: 12
	},
	buttonImageIcon: {
		width: '2.5rem',
		height: '1.5rem',
		transform: 'scaleY(0.6)',
		paddingLeft: 4
	}
}));

const Final = () => {
	console.log('url', window.location.hostname);
	const classes = useStyle();
	return (
		<Container>
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12} style={{height: '20%'}} />
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h4">
						Muchos de nosotros no somos capaces de actuar.
						<br />
						<br />
						Aunque nos gustaría.
						<Typography className={classes.textBody} variant="subtitle1">
							Pero muchas veces nos paralizamos, sin saber qué hacer.
						</Typography>
					</Typography>
				</Grid>
				<Grid xs={12} item>
					<Box height={1} width={1} display="flex" justifyContent="center" alignItems="center">
						<ButtonCustom
							variant="outlined"
							type="outlined"
							component={Link}
							to={'/detenlo/elegir-caso'}
						>
							<img alt="" className={classes.buttonImageIcon} src={longArrow} />
						</ButtonCustom>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Final;
