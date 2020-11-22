import {Grid, makeStyles, Typography} from '@material-ui/core';
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
	}
}));

const Victim = () => {
	const classes = useStyle();
	return (
		<Container
			uri="/victima/introduccion"
			button={
				<ButtonCustom
					variant="contained"
					component={Link}
					to={'/victima/introduccion'}
					type="circular"
				>
					<Typography variant="subtitle1">Estoy lista·o</Typography>
				</ButtonCustom>
			}
			backgroundColor="black"
		>
			<Grid
				className={classes.root}
				container
				direction="column"
				justify="space-between"
				alignItems="center"
			>
				<Grid item>
					<Typography className={classes.text} variant="h4">
						Acabas de dar un paso muy importante
					</Typography>
				</Grid>
				<Grid item>
					<Typography className={classes.text} variant="h4">
						Estás aquí, en un espacio en el que encontrarás la ayuda y la fuerza para combatir la
						violencia de genero.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Victim;
