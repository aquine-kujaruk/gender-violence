import React from 'react';
import {
	Dialog,
	makeStyles,
	Slide,
	Box,
	CircularProgress,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
	Grid,
	Divider,
	Typography,
	withWidth,
	isWidthUp
} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {setIsWide} from '../duck';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const useStyle = makeStyles((theme) => ({
	root: {
		zIndex: '1099 !important',
		top: 0,

		'& .MuiBackdrop-root': {
			top: 0,
			backgroundColor: '#ffffffbb'
		},
		'& .MuiDialog-paper': {
			boxShadow: 'none',
			backgroundColor: 'transparent'
		}
	},
	container: {
		backgroundColor: `${theme.palette.primary.main} !important`,
		borderRadius: 24,
		padding: 24,
		width: '80%'
	},
	divider: {
		backgroundColor: 'white',
		margin: '24px 0'
	},
	button: {
		border: 'solid 3px white',
		borderRadius: 24
	}
}));

const Warning = ({width}) => {
	const classes = useStyle();
	const dispatch = useDispatch();
	const {isWide} = useSelector((state) => state.data);

	useEffect(() => {
		if (isWidthUp('sm', width)) dispatch(setIsWide(true));
	}, [width, dispatch]);

	const handleClose = () => {
		dispatch(setIsWide(false));
	};

	return (
		<Dialog
			key="Warning"
			id="Warning"
			className={classes.root}
			fullScreen
			open={isWide}
			TransitionComponent={Transition}
		>
			<Box width={1} height={1} display="flex" justifyContent="center" alignItems="center">
				<Box className={classes.container}>
					<Grid container>
						<Grid item xs={12}>
							<Typography variant="h4" style={{color: 'white'}}>
								Advertencia
							</Typography>
							<Divider className={classes.divider} />
						</Grid>
						<Grid item xs={12}>
							<Typography variant="h5" style={{color: 'white', paddingBottom: 36}}>
								Para una mejor experiencia, le recomendamos que habra el sitio web en su teléfono
								móvil. Muchas gracias.
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Box width={1} display="flex" justifyContent="flex-end">
								<Button className={classes.button} onClick={handleClose} variant="outlined">
									<Typography variant="h6" style={{color: 'white'}}>
										Entendido
									</Typography>
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Dialog>
	);
};

export default withWidth()(Warning);
