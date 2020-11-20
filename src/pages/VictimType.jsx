import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import Container from './../components/Container';

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
	}
}));

const VictimType = () => {
	const classes = useStyle();
	return (
		<Container>
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h4">
						¿Alguna vez has sido victima de algún tipo de violencia
					</Typography>
				</Grid>
				<Grid xs={12} item>
					<Grid className={classes.root} container direction="row" justify="space-evenly">
						{['Si', 'No', 'No lo sé'].map((item, index) => (
							<Grid key={index} item xs={12}>
								<Box py="8px" display="flex" justifyContent="center">
									<ButtonCustom
										fullWidth
										style={{borderColor: 'white'}}
										variant="outlined"
										type="outlined"
										component={Link}
										to={'/victima/info/intro'}
									>
										<Box display="flex" justifyContent="center">
											<Typography className={classes.buttonText} variant="subtitle1">
												{item}
											</Typography>
										</Box>
									</ButtonCustom>
								</Box>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default VictimType;
