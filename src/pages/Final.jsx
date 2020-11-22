import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import Container from './../components/Container';
import {FacebookShareButton, WhatsappShareButton} from 'react-share';
import {FacebookIcon, WhatsappIcon} from 'react-share';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%',
		padding: '8%'
	},
	text: {
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center'
	},
	textBody: {
		fontWeight: '400',
		color: 'white',
		textAlign: 'center'
	},
	buttonText: {
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center'
	}
}));

const Final = () => {
	const classes = useStyle();
	return (
		<Container>
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h3">
						¡Gracias por estar aquí!
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.textBody} variant="h6">
						¡Compártelo!
						<br />
						Quizá alguien más necesita esta información
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Box width={1} display="flex" justifyContent="center" alignItems="center">
						<FacebookShareButton url={window.location.hostname}>
							<FacebookIcon />
						</FacebookShareButton>
						<WhatsappShareButton url={`https://${window.location.hostname}`}>
							<WhatsappIcon />
						</WhatsappShareButton>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box display="flex" justifyContent="center" px="32px">
						<ButtonCustom
							fullWidth
							style={{borderColor: 'white'}}
							variant="outlined"
							type="outlined"
							component={Link}
							to={'/final'}
						>
							<Box display="flex" justifyContent="center">
								<Typography className={classes.buttonText} variant="h6">
									Copiar link
								</Typography>
							</Box>
						</ButtonCustom>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Final;
