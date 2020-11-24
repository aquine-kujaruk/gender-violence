import React from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';
import ContainerRounded from '../components/ContainerRounded';
import longArrow from '../assets/long-arrow.png';
import {useSelector} from 'react-redux';
import * as parse from 'html-react-parser';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%'
	},
	imageHeader: {
		objectFit: 'contain',
		height: '100%'
	},
	text: {
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#ff5f2b',
		padding: '0 16px'
	},
	buttonText: {
		height: '1.4rem',
		fontWeight: 'bold',
		fontSize: '0.9rem',
		color: '#ff5f2b',
		textTransform: 'none'
	},
	button: {
		borderColor: '#ff5f2b'
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
		text1: parse('Te presentamos <br /> las'),
		text2: 'Estas acciones pueden salvar una vida',
		textButton: 'Quiero saber más'
	},
	ki: {
		text1: parse('Willachita <br /> riksichinchik'),
		text2: 'Kay ruraykuna kikinpa kawsayta kishpichinka',
		textButton: 'Ashtawan yachanayan'
	}
};

const Action5D = () => {
	const classes = useStyle();
	const {language} = useSelector((state) => state.data);

	return (
		<ContainerRounded noShadow topImage>
			<Box height={1} position="relative">
				<Typography className={classes.text} variant="h4">
					{data[language].text1}
				</Typography>
				<Box
					height="calc(80% - 24px)"
					display="flex"
					justifyContent="center"
					boxShadow={10}
					borderRadius={24}
					py="16px"
				>
					<Grid className={classes.root} container direction="row" justify="space-between">
						<Grid item xs={12} style={{height: '70%'}}>
							<Box width={1} height={1} display="flex" justifyContent="center" alignItems="center">
								<Typography
									className={classes.text}
									style={{
										fontFamily: "'PT Sans', sans-serif",
										fontSize: '13rem',
										transform: 'scaleY(1.5)'
									}}
									variant="h1"
								>
									5D
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.text} variant="subtitle1">
								{data[language].text2}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Grid className={classes.root} container direction="row" justify="space-between">
								<Grid item xs={12}>
									<Box display="flex" justifyContent="center" px="32px">
										<ButtonCustom
											fullWidth
											className={classes.button}
											variant="outlined"
											type="outlined"
											component={Link}
											to={'/5D/info'}
										>
											<Box display="flex" justifyContent="center">
												<Typography className={classes.buttonText} variant="subtitle1">
													{data[language].textButton}
												</Typography>
												<Box display="flex" alignItems="center">
													<img alt="" className={classes.buttonImageIcon} src={longArrow} />
												</Box>
											</Box>
										</ButtonCustom>
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</ContainerRounded>
	);
};

export default Action5D;
