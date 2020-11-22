import React, {useState} from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';
import ContainerRounded from '../components/ContainerRounded';
import image5d from '../assets/big-5d.png';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%'
	},
	imageHeader: {
		objectFit: 'contain'
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

const Action5D = () => {
	const classes = useStyle();

	return (
		<ContainerRounded noShadow topImage>
			<Box height={1} position="relative">
				<Typography className={classes.text} variant="h4">
					Te presentamos <br />
					las
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
							<Box
								width={1}
								height={1}
								ml="20%"
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<img alt="" className={classes.imageHeader} src={image5d} />
							</Box>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.text} variant="subtitle1">
								Alguna vez haz hecho algo para detenerlo?
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
													Si
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

export default Action5D;
