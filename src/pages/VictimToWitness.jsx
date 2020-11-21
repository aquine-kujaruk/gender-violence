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
	buttonText: {
		height: '1.4rem',
		fontWeight: 'bold',
		fontSize: '0.9rem',
		color: 'white',
		textTransform: 'none'
	},
	buttonImageIcon: {
		width: '1.8rem',
		transform: 'scaleY(0.6)',
		paddingLeft: 16
	}
}));

const VictimToWitness = () => {
	const classes = useStyle();
	return (
		<Container>
			<Grid className={classes.root} container direction="row" justify="space-evenly">
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h4">
						Ahora mira lo que puedes hacer si eres un testigo
					</Typography>
				</Grid>
				<Grid xs={12} item>
					<Grid className={classes.root} container direction="row" justify="space-evenly">
						<Grid item xs={12}>
							<Box py="8px" display="flex" justifyContent="center">
								<ButtonCustom
									fullWidth
									style={{borderColor: 'white'}}
									variant="outlined"
									type="outlined"
									component={Link}
									to={'/victima/accion'}
								>
									<Box display="flex" justifyContent="center">
										<Typography className={classes.buttonText} variant="subtitle1">
											Estoy lista
										</Typography>
										<img alt="" className={classes.buttonImageIcon} src={longArrow} />
									</Box>
								</ButtonCustom>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default VictimToWitness;
