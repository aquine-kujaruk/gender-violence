import React, {useEffect} from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';
import ContainerRounded from '../components/ContainerRounded';
import headerImage from '../assets/1-2.png';
import {useDispatch, useSelector} from 'react-redux';
import {createUser} from '../duck';

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
		textAlign: 'justify',
		padding: '0 16px'
	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: '0.9rem',
		color: '#ff5f2b',
		textTransform: 'none',
		textAlign: 'center'
	},
	button: {
		borderColor: '#ff5f2b'
	},
	counter: {
		margin: '0 16px',
		borderRadius: '12px',
		border: `solid 1px ${theme.palette.primary.main}`
	},
	counterText: {
		fontWeight: 'bold'
	}
}));

const data = {
	es: {
		text1: '¡Felicitaciones!',
		text2: 'Ahora formas parte de una comunidad de personas que combate la violencia de género.',
		button1: 'Solicitar Certificado',
		button2: 'Finalizar Formación'
	},
	ki: {
		text1: '¡Huyayay!',
		text2: 'Kunanka ñami kanki tawkapura violencia de género mana tiyachun',
		button1: 'Yachakushka phankata mañay',
		button2: 'Yachakuyta illachiy'
	}
};

const Congratulations = () => {
	const classes = useStyle();
	const dispatch = useDispatch();
	const {identifier, language} = useSelector((state) => state.data);

	useEffect(() => {
		dispatch(createUser());
	}, [dispatch]);

	const transform = () => {
		const length = identifier.toString().length;
		if (length === 6) return identifier.toString();
		const zeros = '0'.repeat(5 - length);
		return `${zeros}${identifier}`;
	};

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
								{data[language].text1}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Box
								className={classes.counter}
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<Typography variant="h4" className={classes.counterText}>
									{transform()}
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.textBody} variant="h6">
								<span className="primary-color">
									<strong>{data[language].text2}</strong>
								</span>
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
											to={'/solicitud'}
										>
											<Box display="flex" justifyContent="center">
												<Typography className={classes.buttonText} variant="subtitle1">
													{data[language].button1}
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
											to={'/final'}
										>
											<Box display="flex" justifyContent="center">
												<Typography className={classes.buttonText} variant="subtitle1">
													{data[language].button2}
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

export default Congratulations;
