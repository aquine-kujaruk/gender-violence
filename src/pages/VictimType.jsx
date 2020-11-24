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

const VictimType = () => {
	const classes = useStyle();
	const {language} = useSelector((state) => state.data);

	return (
		<Container>
			<Grid className={classes.root} container direction="row" justify="space-evenly">
				<Grid item xs={12}>
					<Box height={1} width={1} display="flex" justifyContent="center" alignItems="center">
						<Typography
							className={classes.text}
							variant="h4"
							style={language === 'ki' ? {fontSize: '1.8rem'} : {}}
						>
							{language === 'es'
								? '¿Alguna vez has sido víctima de algún tipo de violencia?'
								: '¿Ima pachapipash kikinka llakichitukushkankichu?'}
						</Typography>
					</Box>
				</Grid>
				<Grid xs={12} item>
					<Box height={1} width={1} pt="25%">
						{(language === 'es' ? ['Si', 'No', 'No lo sé'] : ['Ari', 'Mana', 'Mana yachani']).map(
							(item, index) => (
								<Box key={index} width={1} py="16px" display="flex" justifyContent="center">
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
							)
						)}
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default VictimType;
