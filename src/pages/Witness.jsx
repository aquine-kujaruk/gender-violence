import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import Container from './../components/Container';
import {useSelector} from 'react-redux';

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

const Witness = () => {
	const classes = useStyle();
	const {language} = useSelector((state) => state.data);

	return (
		<Container>
			<Grid className={classes.root} container direction="row" justify="space-evenly">
				<Grid item xs={12}>
					<Box height={1} width={1} display="flex" justifyContent="center" alignItems="center">
						<Typography className={classes.text} variant="h4">
							{language === 'es'
								? '¿Alguna vez has presenciado una situación de violencia de género?'
								: '¿Ima pachapipash rikushkankichu pitapash llakichikukta?'}
						</Typography>
					</Box>
				</Grid>
				<Grid xs={12} item>
					<Box height={1} width={1} pt="25%">
						{(language === 'es' ? ['Si', 'No lo sé'] : ['Ari', 'Mana yachani']).map(
							(item, index) => (
								<Box key={index} width={1} py="16px" display="flex" justifyContent="center">
									<ButtonCustom
										fullWidth
										style={{borderColor: 'white'}}
										variant="outlined"
										type="outlined"
										component={Link}
										to={'/testigo/info/intro'}
									>
										<Box display="flex" justifyContent="center">
											<Typography className={classes.buttonText} variant="subtitle1">
												{item}
											</Typography>
										</Box>
									</ButtonCustom>
								</Box>
							)
						)}
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Witness;
