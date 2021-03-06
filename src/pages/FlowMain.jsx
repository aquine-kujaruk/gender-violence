import React, {useState} from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';
import * as parse from 'html-react-parser';
import ContainerRounded from './../components/ContainerRounded';
import headerImage from '../assets/que-hacer.png';
import headerImageKichwa from '../assets/que-hacer-kichwa.png';
import slide1Image from '../assets/2-1.jpg';
import slide2Image from '../assets/1-1.jpg';
import {useSelector} from 'react-redux';

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
		fontWeight: '100',
		color: 'white'
	}
}));

const Flow = () => {
	const classes = useStyle();
	const {language} = useSelector((state) => state.data);

	const [index, setIndex] = useState(0);

	const header = (
		<img
			src={language === 'es' ? headerImage : headerImageKichwa}
			alt=""
			className={classes.textImage}
		/>
	);

	const data = {
		es: [
			{
				title: 'Cuando <br /> te ocurre a ti',
				url: slide1Image,
				link: '/victima'
			},
			{
				title: 'Cuando <br /> eres testigo',
				url: slide2Image,
				link: '/testigo'
			}
		],
		ki: [
			{
				title: 'Kikin <br /> llakichitukushpa',
				url: slide1Image,
				link: '/victima'
			},
			{
				title: 'Kikin <br /> rikushka kashpa',
				url: slide2Image,
				link: '/testigo'
			}
		]
	};

	return (
		<ContainerRounded
			textHeader
			scrollable
			header={header}
			index={index}
			setIndex={setIndex}
			length={data[language].length}
		>
			<Box height={1} style={{borderRadius: 24, overflow: 'hidden'}}>
				<img
					src={data[language][index].url}
					width="100%"
					height="100%"
					alt="flow"
					style={{objectFit: 'cover'}}
				/>
			</Box>
			<Box zIndex="tooltip" className={classes.content}>
				<Typography variant="h4" className={classes.title}>
					{parse(data[language][index].title)}
				</Typography>
				<ButtonCustom
					variant="contained"
					component={Link}
					to={data[language][index].link}
					type="rounded"
				>
					<Typography className={classes.buttonText} variant="subtitle1">
						{language === 'es' ? 'Iniciar Formación' : 'Sumak yachakuyta kallariy'}
					</Typography>
				</ButtonCustom>
			</Box>
		</ContainerRounded>
	);
};

export default Flow;
