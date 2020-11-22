import {Grid, makeStyles, Typography} from '@material-ui/core';
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
		color: theme.palette.primary.main,
		textAlign: 'center'
	},
	textBody: {
		paddingTop: 8,
		color: theme.palette.primary.main
	},
	buttonImageIcon: {
		height: '1.2rem',
		width: '1.8rem',
		transform: 'scaleY(0.6)',
		paddingLeft: 16
	}
}));

const StopAbuseNext = () => {
	const classes = useStyle();
	return (
		<Container
			button={
				<ButtonCustom variant="contained" component={Link} to={'/5d'} type="circular">
					<Typography variant="subtitle1">Estoy lista·o</Typography>
					<img alt="" className={classes.buttonImageIcon} src={longArrow} />
				</ButtonCustom>
			}
			backgroundColor="black"
			frontbgColor="white"
		>
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h4">
						Lo entendemos.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.textBody} variant="subtitle1">
						De hecho, muchos de nosotros no sabe qué hacer ante una situación de violencia de
						género. Y en el mayor de los casos se considera arriesgado el hecho de intervenir. Por
						ello hemos reunido un conjunto de diferentes acciones diseñadas para evitar
						consecuencias negativas para ti o para la víctima. Las acciones menos directas son
						recomendables si no estás seguro.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.textBody} variant="subtitle1">
						<strong>¿Estás preparado/a para ponerlas en práctica?</strong>
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default StopAbuseNext;
