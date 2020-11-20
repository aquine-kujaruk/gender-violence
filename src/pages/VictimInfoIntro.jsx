import React, {useState} from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';
import ContainerRounded from './../components/ContainerRounded';
import longArrow from '../images/long-arrow-white.png';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%',
		padding: '8%',
		backgroundColor: theme.palette.primary.main
	},
	text: {
		fontWeight: 'bold',
		color: 'white'
	},
	textBody: {
		color: 'white'
	},
	buttonImageIcon: {
		width: '3.5rem',
		height: '2.5rem',
		transform: 'scaleY(0.6)',
		paddingLeft: 8
	},
	buttonText: {
		fontWeight: 'bold',
		color: 'white'
	}
}));

const VictimInfoIntro = () => {
	const classes = useStyle();

	return (
		<ContainerRounded>
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h4">
						Lamentablemente ocurre todos los días, en todas partes
					</Typography>
				</Grid>
				<Grid xs={12} item>
					<Typography className={classes.textBody} variant="body2">
						<strong>Se considera violencia de género</strong> cualquier acto violento o agresión,
						basados en una situación de desigualdad en el marco de un sistema de relaciones de
						dominación de los hombres sobre las mujeres que tenga o pueda tener como consecuencia un
						daño físico, sexual o psicológico
					</Typography>
				</Grid>
				<Grid xs={12} item>
					<ButtonCustom
						fullWidth
						style={{borderColor: 'white', height: '100%'}}
						variant="outlined"
						type="outlined"
						component={Link}
						to={'/victima/info'}
					>
						<Typography className={classes.buttonText} variant="subtitle1">
							Queremos enseñarte un poco más sobre esto
						</Typography>
						<img alt="" className={classes.buttonImageIcon} src={longArrow} />
					</ButtonCustom>
				</Grid>
			</Grid>
		</ContainerRounded>
	);
};

export default VictimInfoIntro;
