import React from 'react';
import {Grid, makeStyles, Typography, Box} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';
import * as parse from 'html-react-parser';
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import ContainerRounded from './../components/ContainerRounded';
import longArrow from '../assets/long-arrow-white.png';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%',
		padding: '8%',
		backgroundColor: theme.palette.primary.main,
		borderRadius: 24,
		overflow: 'scroll'
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

const VictimInfoIntro = ({link = '/victima/info', width}) => {
	const classes = useStyle();

	return (
		<ContainerRounded>
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h4">
						{isWidthUp('sm', width)
							? parse('Lamentablemente ocurre todos los días, en todas partes')
							: parse('Lamentable- <br /> mente ocurre todos los días, en todas partes')}
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
					<Box height={1} width={1} display="flex" justifyContent="center" alignItems="center">
						<ButtonCustom
							fullWidth
							style={{borderColor: 'white', height: '100%'}}
							variant="outlined"
							type="outlined"
							component={Link}
							to={link}
						>
							<Typography className={classes.buttonText} variant="subtitle1">
								Queremos enseñarte un poco más sobre esto
							</Typography>
							<img alt="" className={classes.buttonImageIcon} src={longArrow} />
						</ButtonCustom>
					</Box>
				</Grid>
			</Grid>
		</ContainerRounded>
	);
};

export default withWidth()(VictimInfoIntro);
