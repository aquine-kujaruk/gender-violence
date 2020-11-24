import React, {Fragment, useState, useCallback, useEffect} from 'react';
import {Box, Grid, makeStyles, Typography, Divider} from '@material-ui/core';
import {useParams} from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import Container from './../components/Container';
import shape from '../assets/shape.png';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo-2.png';
import logo3 from '../assets/logo-3.png';
import ComponentToPdf from './../components/ComponentToPdf';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setLoader} from '../duck';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%',
		overflow: 'scroll'
	},
	text: {
		fontWeight: '400',
		color: 'white',
		textAlign: 'center'
	},
	textTitle: {
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		lineHeight: 1.2
	},
	buttonText: {
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		'&.success': {
			color: theme.palette.primary.main
		}
	},
	centerContainer: {
		objectFit: 'fill',
		width: '100vw',
		height: `calc(100vh * 0.35 - ${theme.mixins.toolbar.minHeight}px * 0.35)`
	},
	nameContainer: {
		margin: '0 16px',
		borderRadius: '12px',
		border: `solid 1px white`
	},
	name: {
		fontWeight: 'bold',
		color: 'white',
		textTransform: 'capitalize'
	},
	divider: {
		margin: '0 5%',
		backgroundColor: 'white',
		height: 0.5
	},
	imageHeader: {
		objectFit: 'contain',
		height: '10vh',
		width: '100%'
	}
}));

const Certificate = ({noButton}) => {
	const dispatch = useDispatch();

	const {fullname = ''} = useParams();
	const name = fullname.split(' ').splice(0, 2).join(' ');

	const history = useHistory();
	const handleOnClick = useCallback(() => history.push('/final'), [history]);

	const classes = useStyle();
	const [download, setDownload] = useState(false);
	const [status, setStatus] = useState(null);

	useEffect(() => {
		dispatch(setLoader(download));
	}, [download, dispatch]);

	useEffect(() => {
		if (['success', 'error'].includes(status)) {
			dispatch(setLoader(false));
			handleOnClick();
		}
	}, [status, handleOnClick, download, dispatch]);

	const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
	const months = [
		'enero',
		'febrero',
		'marzo',
		'abril',
		'mayo',
		'junio',
		'julio',
		'agosto',
		'septiembre',
		'octubre',
		'noviembre',
		'diciembre'
	];

	const date = new Date();

	return (
		<Fragment>
			<Container>
				<Grid className={classes.root}>
					<Grid item xs={12} style={{backgroundColor: 'white', height: '13%'}}>
						<Grid container>
							<Grid item xs={6} style={{padding: '0 8px'}}>
								<Box display="flex" justifyContent="center" alignItems="center">
									<img alt="" className={classes.imageHeader} style={{maxWidth: 390}} src={logo2} />
								</Box>
							</Grid>
							<Grid item xs={6} style={{padding: '0 8px'}}>
								<Box display="flex" justifyContent="center" alignItems="center">
									<img alt="" className={classes.imageHeader} style={{maxWidth: 270}} src={logo3} />
								</Box>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} style={{height: '22%', padding: 8}}>
						<Grid container direction="row" justify="space-between" style={{height: '100%'}}>
							<Grid item xs={12}>
								<Typography className={classes.text} variant="subtitle2">
									Confieren el siguiente reconocimiento a:
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Box
									className={classes.nameContainer}
									display="flex"
									justifyContent="center"
									alignItems="center"
								>
									<Typography variant="h4" className={classes.name}>
										{name}
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12}>
								<Typography className={classes.text} variant="subtitle2">
									por su activa participación en la campaña
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} style={{height: '35%'}}>
						<Box>
							<img alt="" className={classes.centerContainer} src={shape} />
						</Box>
						<Box display="flex" justifyContent="center" position="relative" bottom="24vh">
							<img alt="" className={classes.logo} src={logo} />
						</Box>
					</Grid>
					<Grid item xs={12} style={{height: '30%'}}>
						<Grid
							container
							direction="row"
							justify="space-between"
							style={{height: '100%', paddingBottom: 8}}
						>
							<Grid item xs={12}>
								<Typography className={classes.text} variant="subtitle2">
									en conmemoración al
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography className={classes.textTitle} variant="h6">
									Día Internacional de la Eliminación de la Violencia contra la Mujer
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Divider className={classes.divider} />
							</Grid>
							<Grid item xs={12}>
								<Typography className={classes.text} variant="subtitle1">
									Antonio Ante, {days[date.getDay()]} {date.getDate()} de {months[date.getMonth()]}{' '}
									de {date.getFullYear()}
								</Typography>
							</Grid>
							{!noButton && (
								<Grid item xs={12}>
									<Box display="flex" justifyContent="center" px="32px">
										<ButtonCustom
											fullWidth
											style={
												status === 'success'
													? {backgroundColor: 'white', textTransform: 'none'}
													: {borderColor: 'white', textTransform: 'none'}
											}
											variant="outlined"
											type="outlined"
											onClick={() => setDownload(true)}
										>
											<Box display="flex" justifyContent="center">
												<Typography
													className={`${classes.buttonText} ${status === 'success' && 'success'}`}
													variant="subtitle2"
												>
													{status === 'success' ? 'Descargado con éxito' : 'Descargar'}
												</Typography>
											</Box>
										</ButtonCustom>
									</Box>
								</Grid>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Container>
			{download && (
				<ComponentToPdf setDownload={setDownload} setStatus={setStatus}>
					<Certificate noButton />
				</ComponentToPdf>
			)}
		</Fragment>
	);
};

export default Certificate;
