import {Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import Container from './../components/Container';
import longArrow from '../assets/long-arrow-white.png';
import {useSelector} from 'react-redux';

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

const data = {
	es: {
		text1: 'Lo entendemos.',
		text2: `
			De hecho, muchos de nosotros no sabe qué hacer ante una situación de violencia de
			género. Y en el mayor de los casos se considera arriesgado el hecho de intervenir. Por
			ello hemos reunido un conjunto de diferentes acciones diseñadas para evitar
			consecuencias negativas para ti o para la víctima. Las acciones menos directas son
			recomendables si no estás seguro.
		`,
		text3: '¿Estás preparado/a para ponerlas en práctica?',
		buttonText: 'Estoy lista·o'
	},
	ki: {
		text1: 'Hamutanchikmi.',
		text2: `
		Shinami kan, tawkami mana imata ruranatapash yachanchik pitapash llakichikukpi. 
		Ashtawankari ñukanchikpa allí kaytara wakllichinkata yuyarin.
		Por ello hemos reunido un conjunto de diferentes acciones diseñadas para evitar 
		consecuencias negativas para ti o para la víctima. Las acciones menos directas son recomendables si no estás seguro.
		`,
		text3: '¿Ña yuyaywanchu kanki kay ruraykunata paktachinkapak?',
		buttonText: 'Ña kani'
	}
};

const StopAbuseNext = () => {
	const classes = useStyle();
	const {language} = useSelector((state) => state.data);
	return (
		<Container
			button={
				<ButtonCustom variant="contained" component={Link} to={'/5d'} type="circular">
					<Typography variant="subtitle1" style={{color: 'white'}}>
						{data[language].buttonText}
					</Typography>
					<img alt="" className={classes.buttonImageIcon} src={longArrow} />
				</ButtonCustom>
			}
			backgroundColor="black"
			frontbgColor="white"
		>
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h4">
						{data[language].text1}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.textBody} variant="subtitle1">
						{data[language].text2}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.textBody} variant="subtitle1">
						<strong>{data[language].text3}</strong>
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default StopAbuseNext;
