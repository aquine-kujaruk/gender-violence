import React, {useState} from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';
import ContainerRounded from './../components/ContainerRounded';
import headerImage from '../assets/que-hacer.png';
import slide1Image from '../assets/2-1.jpg';
import slide2Image from '../assets/1-1.jpg';

const useStyle = makeStyles((theme) => ({
	content: {
		position: 'absolute',
		bottom: 48,
		left: 24
	},
	textImage: {
		width: 300,
		position: 'relative',
		top: 71,
		height: 71
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		lineHeight: 1,
		paddingBottom: 4,
		textShadow: '1px 1px 2px #00000075'
	},
	buttonText: {
		fontWeight: '100'
	}
}));

const Flow = () => {
	const classes = useStyle();

	const [index, setIndex] = useState(0);

	const header = <img src={headerImage} alt="" className={classes.textImage} />;

	const urls = [slide1Image, slide2Image];

	return (
		<ContainerRounded
			textHeader
			scrollable
			header={header}
			index={index}
			setIndex={setIndex}
			bgColor={index === 0 ? 'black' : 'white'}
			length={urls.length}
		>
			<Box height={1}>
				<img src={urls[index]} width="100%" height="100%" alt="flow" style={{objectFit: 'cover'}} />
			</Box>
			<Box zIndex="tooltip" className={classes.content}>
				<Typography variant="h4" className={classes.title}>
					Cuando
					<br />
					te ocurre a ti
				</Typography>
				<ButtonCustom variant="contained" component={Link} to={'/victima'} type="rounded">
					<Typography className={classes.buttonText} variant="subtitle1">
						Iniciar Formación
					</Typography>
				</ButtonCustom>
			</Box>
		</ContainerRounded>
	);
};

export default Flow;