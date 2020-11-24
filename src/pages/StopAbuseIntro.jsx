import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
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
		color: 'white'
	},
	textBody: {
		paddingTop: 12,
		color: 'white'
	},
	buttonImageIcon: {
		width: '2.5rem',
		height: '1.5rem',
		transform: 'scaleY(0.6)',
		paddingLeft: 4
	}
}));

const data = {
	es: {
		text1: 'Muchos de nosotros no somos capaces de actuar.',
		text2: 'Aunque nos gustaría.',
		text3: 'Pero muchas veces nos paralizamos, sin saber qué hacer.'
	},
	ki: {
		text1: 'Tawkami tiyanchik mana imatapash rurayta ushakkuna',
		text2: 'Munakushpapash',
		text3: 'Ashtawankariy manchariwan kasilla sakirinchik, mana imatapash  rurayta ushashpa.'
	}
};

const StopAbuseIntro = () => {
	const classes = useStyle();
	const {language} = useSelector((state) => state.data);
	return (
		<Container>
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12} style={{height: '20%'}} />
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h4">
						{data[language].text1}
						<br />
						<br />
						{data[language].text2}
					</Typography>
					<Typography className={classes.textBody} variant="subtitle1">
						{data[language].text3}
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

export default StopAbuseIntro;
