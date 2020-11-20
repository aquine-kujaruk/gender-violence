import {Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
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
		<Container uri="/victima/info" textButton="Estoy lista" backgroundColor="black">
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
