import React, {useState} from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';
import ContainerRounded from '../components/ContainerRounded';
import headerImage from '../assets/1-2.png';
import * as parse from 'html-react-parser';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%'
	},
	imageHeader: {
		objectFit: 'contain',
		height: '100%'
	},
	text: {
		fontWeight: '500',
		textAlign: 'center',
		color: '#ff5f2b'
	},
	textBody: {
		fontWeight: '400'
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

const Messages = () => {
	const classes = useStyle();

	const [index, setIndex] = useState(0);

	const data = [
		{
			title: 'Mensaje',
			author: 'Ing. Rolando López',
			authorTitle: 'ALCALDE DE ANTONIO ANTE',
			body: `
            Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.`
		},
		{
			title: 'Mensaje',
			author: 'Catalina Yépez',
			authorTitle: 'CONCEJALA DE ANTONIO ANTE',
			body: `
            Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.`
		},
		{
			title: 'Mensaje',
			author: 'Pilar Pastrana',
			authorTitle: 'PRESIDENTA DE LA FUNDACIÓN DE REINAS DE ANTONIO ANTE',
			body: `
            Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.`
		},
		{
			title: 'Mensaje',
			author: 'Alejanda López',
			authorTitle: 'REINA DE ANTONIO ANTE',
			body: `
            Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.
            <br /> 
            Ahora formas parte de una comunidad de personas que combate la violencia de género. Ahora formas parte de una comunidad de personas que combate la violencia de género.`
		}
	];

	return (
		<ContainerRounded
			noShadow
			topImage
			scrollable
			index={index}
			setIndex={setIndex}
			length={data.length}
		>
			<Box height={1} position="relative">
				<Box height={0.3} display="flex" justifyContent="center">
					<img alt="" className={classes.imageHeader} src={headerImage} />
				</Box>
				<Box
					height="calc(70% - 24px)"
					display="flex"
					justifyContent="center"
					alignItems="center"
					boxShadow={10}
					borderRadius={24}
					p="16px"
				>
					<Grid className={classes.root} container direction="row" justify="space-between">
						<Grid item xs={12}>
							<Typography className={classes.text} variant="h5">
								{data[index].title}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.textBody} variant="body2">
								{parse(data[index].body)}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.text} style={{color: 'inherit'}} variant="h5">
								{data[index].author}
							</Typography>
							<Typography className={classes.text} style={{color: 'inherit'}} variant="subtitle2">
								{data[index].authorTitle}
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</ContainerRounded>
	);
};

export default Messages;
