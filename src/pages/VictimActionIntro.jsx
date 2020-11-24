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
		padding: '8%',
		overflow: 'scroll'
	},
	text: {
		fontWeight: 'bold',
		color: 'white'
	},
	buttonImageIcon: {
		width: '1.8rem',
		paddingLeft: 4
	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: '0.9rem',
		color: 'white',
		textTransform: 'none'
	}
}));

const VictimActionIntro = () => {
	const classes = useStyle();
	const {language} = useSelector((state) => state.data);
	return (
		<Container>
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12}>
					<Typography className={classes.text} variant={language === 'es' ? 'h4' : 'h5'}>
						{language === 'es'
							? 'Ahora que tienes esta información puedes identificar situaciones de violencia en tu entorno'
							: 'Ña kay willaykunata kunanka yachanki, shinaka  ña ushankichu ima llakichikunata kawsashkata willanata'}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.text} variant={language === 'es' ? 'h4' : 'h5'}>
						{language === 'es'
							? 'Pero ¿Qué puedes hacer al respecto?'
							: 'Shinapash, imatatak kay hawa rurayta ushanki'}
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
									<Grid container>
										<Grid item xs={10}>
											<Typography className={classes.buttonText} variant="subtitle1">
												{language === 'es'
													? 'Veamos que puedes hacer'
													: 'Rikushun imatami rurayta ushanki'}
											</Typography>
										</Grid>
										<Grid item xs={2}>
											<Box height={1} display="flex" justifyContent="center" alignItems="center">
												<img alt="" className={classes.buttonImageIcon} src={longArrow} />
											</Box>
										</Grid>
									</Grid>
								</ButtonCustom>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default VictimActionIntro;
