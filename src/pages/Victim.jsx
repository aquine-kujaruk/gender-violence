import {Grid, makeStyles, Typography} from '@material-ui/core';
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
	}
}));

const Victim = () => {
	const classes = useStyle();
	const {language} = useSelector((state) => state.data);

	const data = {
		es: {
			text1: 'Acabas de dar un paso muy importante',
			text2:
				'Estás aquí, en un espacio en el que encontrarás la ayuda y la fuerza para combatir la violencia de género.',
			buttonText: 'Estoy lista·o'
		},
		ki: {
			text1: 'Ña allipacha rurayta paktachikunki.',
			text2:
				'Kaypi kanki kay kushkapi tarinki yanapayta  shinallatak ashtawan sinchi yuyayta hapishpa mana warmikunata llakichikuna tiyachun.',
			buttonText: 'Ña kani'
		}
	};

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
					<Typography variant="subtitle1" style={{color: 'white'}}>
						{data[language].buttonText}
					</Typography>
				</ButtonCustom>
			}
			backgroundColor="black"
		>
			<Grid
				className={classes.root}
				container
				direction="row"
				justify="space-evenly"
				alignItems="center"
			>
				<Grid item>
					<Typography
						className={classes.text}
						style={language === 'ki' ? {fontSize: '1.75rem'} : {}}
						variant="h4"
					>
						{data[language].text1}
					</Typography>
				</Grid>
				<Grid item>
					<Typography
						className={classes.text}
						style={language === 'ki' ? {fontSize: '1.75rem'} : {}}
						variant="h4"
					>
						{data[language].text2}
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Victim;
