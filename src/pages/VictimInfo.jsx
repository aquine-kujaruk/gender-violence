import React, {useRef, useState} from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import Container from './../components/Container';
import longArrow from '../assets/long-arrow-white.png';
import Dots from './../components/Dots';
import CustomSlide from './../components/CustomSlide';
import imageHero from '../assets/3-1.jpg';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%'
	},
	hero: {
		background: `url(${imageHero})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	},
	title: {
		fontWeight: 'bold',
		color: '#ff5f2b',
		padding: 4,
		'&.left': {
			fontWeight: '100'
		}
	},
	titleContainer: {
		backgroundColor: '#ffffffbb'
	},
	buttonImageIcon: {
		width: '2.5rem',
		height: '1.5rem',
		transform: 'scaleY(0.6)',
		paddingLeft: 4
	},
	textBody: {
		color: 'white',
		padding: '8px 16px',
		fontSize: '0.85rem'
	}
}));

const data = [
	{
		titleLeft: 'Violencia',
		titleRight: 'Psicológica',
		text:
			'Conducta dirigida a causar daño emocional, disminuir la autoestima, provocar descrédito, menospreciar la dignidad personal, degradar la identidad cultural.'
	},
	{
		titleLeft: 'Violencia',
		titleRight: 'Física',
		text:
			'Acto que produce daño o sufrimiento físico, dolor o muerte, así como, castigos corporales, que provoca o no lesiones, ya sean internas, externas o ambas.'
	},
	{
		titleLeft: 'Violencia',
		titleRight: 'Sexual',
		text:
			'Acción que implica vulneración del derecho a la integridad y decidir voluntariamente sobre su vida sexual y reproductiva, a través de amenazas, represión, uso de la fuerza e intimidación.'
	},
	{
		titleLeft: 'Violencia',
		titleRight: 'Económica',
		text:
			'Acción que ocasiona una restricción en los recursos económicos y patrimoniales de las mujeres, incluidos aquellos de la sociedad de bienes conyugal y de uniones de hecho.'
	},
	{
		titleLeft: 'Violencia',
		titleRight: 'Gineco-Obstétrica',
		text:
			'Toda acción u omisión que limite el derecho de las mujeres embarazadas o no, a recibir servicios de salud gineco-obstétricos.'
	}
];

const VictimInfo = () => {
	const classes = useStyle();
	const [slider1Ref, slider2Ref] = [useRef(), useRef()];

	const [index, setIndex] = useState(0);

	const onNext = () => {
		slider1Ref.current.onArrowClick('right');
		slider2Ref.current.onArrowClick('right');
	};

	return (
		<Container>
			<Grid className={classes.root} container>
				<Grid item xs={12}>
					<Box height={0.65} width={1} position="relative" className={classes.hero}>
						<Box
							position="absolute"
							height="4.5rem"
							width={1}
							bottom="0"
							className={classes.titleContainer}
						></Box>
						<CustomSlide ref={slider1Ref} index={index} setIndex={setIndex} length={data.length}>
							{index !== 4 ? (
								<Box
									position="absolute"
									height="4.5rem"
									width={1}
									bottom="0"
									display="flex"
									justifyContent="center"
									alignItems="center"
								>
									<Typography className={`${classes.title} left`} variant="h6">
										{data[index].titleLeft}
									</Typography>
									<Typography className={classes.title} variant="h3">
										{data[index].titleRight}
									</Typography>
								</Box>
							) : (
								<Box
									position="absolute"
									height="4.5rem"
									width={1}
									bottom="0"
									display="flex"
									justifyContent="center"
									alignItems="center"
									pl="16px"
								>
									<Grid container>
										<Grid item xs={12}>
											<Typography
												className={`${classes.title} left`}
												style={{padding: 0}}
												variant="h6"
											>
												{data[index].titleLeft}
											</Typography>
										</Grid>
										<Grid item xs={12}>
											<Typography className={classes.title} style={{padding: 0}} variant="h4">
												{data[index].titleRight}
											</Typography>
										</Grid>
									</Grid>
								</Box>
							)}
						</CustomSlide>
					</Box>
					<CustomSlide ref={slider2Ref} index={index} setIndex={setIndex} length={data.length}>
						<Box height={0.25} width={1} display="flex" justifyContent="center" alignItems="center">
							<Typography className={classes.textBody} variant="body2">
								{data[index].text}
							</Typography>
						</Box>
					</CustomSlide>
					<Box height={0.06} width={1} display="flex" justifyContent="center" alignItems="center">
						<ButtonCustom
							style={{borderColor: 'white'}}
							variant="outlined"
							type="outlined"
							onClick={onNext}
							/* component={Link}
							to={'/victima/info'} */
						>
							<img alt="" className={classes.buttonImageIcon} src={longArrow} />
						</ButtonCustom>
					</Box>
					<Box height={0.04} width={1}>
						<Dots selected={index} length={data.length} bgColor="white" />
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default VictimInfo;
