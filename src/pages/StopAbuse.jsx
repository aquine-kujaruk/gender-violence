import React from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';
import ContainerRounded from '../components/ContainerRounded';
import headerImage from '../assets/6-1.png';
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
		color: '#ff5f2b'
	},
	textBody: {
		textAlign: 'center'
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
	}
}));

const StopAbuse = () => {
	const classes = useStyle();
	const {language} = useSelector((state) => state.data);

	return (
		<ContainerRounded noShadow topImage>
			<Box height={1} position="relative">
				<Box height={0.3} display="flex" justifyContent="center">
					<img alt="" className={classes.imageHeader} src={headerImage} />
				</Box>
				<Box
					height="calc(70% - 24px)"
					display="flex"
					justifyContent="center"
					alignItems="center"
					boxShadow={10}
					borderRadius={24}
					p="16px"
				>
					<Grid className={classes.root} container direction="row" justify="space-between">
						<Grid item xs={12}>
							<Typography className={classes.text} variant="h4">
								{language === 'es'
									? 'Alguna vez haz hecho algo para detenerlo?'
									: '¿Kikinka harkashkankichu mana llakichi katichu?'}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.textBody} variant="body1">
								{language === 'es'
									? parse(
											'No pasa absolutamente nada <br /> si no lo has hecho. <span class="primary-color">Sin presión.</span>'
									  )
									: parse('Mana imapash kanchu na <br />  harkashka kashpa.')}
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
											to={'/detenlo/intro'}
										>
											<Box display="flex" justifyContent="center">
												<Typography className={classes.buttonText} variant="subtitle1">
													{language === 'es' ? 'Si' : 'Ari'}
												</Typography>
											</Box>
										</ButtonCustom>
									</Box>
								</Grid>
								<Grid item xs={12}>
									<Box display="flex" justifyContent="center" px="32px">
										<ButtonCustom
											fullWidth
											className={classes.button}
											variant="outlined"
											type="outlined"
											component={Link}
											to={'/detenlo/intro'}
										>
											<Box display="flex" justifyContent="center">
												<Typography className={classes.buttonText} variant="subtitle1">
													{language === 'es' ? 'No' : 'Mana'}
												</Typography>
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

export default StopAbuse;
