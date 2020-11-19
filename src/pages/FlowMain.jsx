import React, {useRef, useState} from 'react';
import {Box, Grid, IconButton, makeStyles, Typography} from '@material-ui/core';
import {PlayArrow} from '@material-ui/icons';
import {useSwipeable} from 'react-swipeable';
import CustomSlide from '../components/CustomSlide';
import Dots from '../components/Dots';
import ButtonRounded from '../components/ButtonRounded';
import {Link} from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
	headerContainer: {
		height: theme.mixins.toolbar.minHeight + 8 + 60,
		backgroundColor: theme.palette.primary.main
	},
	container: {
		height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 8 + 60 + 30 + 48}px)`,
		margin: '24px 0',
		borderRadius: 24,
		overflow: 'hidden'
	},
	footer: {
		height: 30
	},
	inverted: {
		transform: 'rotate(180deg)'
	},
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
	const childRef = useRef();

	const [index, setIndex] = useState(0);

	const onArrowLeft = () => {
		childRef.current.onArrowClick('left');
	};
	const onArrowRight = () => {
		childRef.current.onArrowClick('right');
	};

	const handlers = useSwipeable({
		onSwipedLeft: onArrowRight,
		onSwipedRight: onArrowLeft
	});

	const urls = ['https://i.ibb.co/M12mMKc/1.webp', 'https://i.ibb.co/rt0pdtt/8.jpg'];

	return (
		<Grid
			container
			style={{
				backgroundColor: index === 0 ? 'black' : 'white',
				transition: 'background-color 250ms ease'
			}}
		>
			<Grid item>
				<Box
					width="100vw"
					className={classes.headerContainer}
					display="flex"
					justifyContent="center"
				>
					<img src="https://i.ibb.co/YjRwLBJ/que-hacer.png" className={classes.textImage} />
				</Box>
			</Grid>
			<Grid item xs={1}>
				<Box height={1} display="flex" alignItems="center" justifyContent="center">
					<IconButton color="primary" onClick={onArrowLeft}>
						<PlayArrow className={classes.inverted} />
					</IconButton>
				</Box>
			</Grid>
			<Grid item xs={10} {...handlers}>
				<CustomSlide ref={childRef} index={index} setIndex={setIndex}>
					<Box position="relative" className={classes.container}>
						<Box height={1}>
							<img
								src={urls[index]}
								width="100%"
								height="100%"
								alt="flow"
								style={{objectFit: 'cover'}}
							/>
						</Box>
						<Box zIndex="tooltip" className={classes.content}>
							<Typography variant="h4" className={classes.title}>
								Cuando
								<br />
								te ocurre a ti
							</Typography>
							<ButtonRounded component={Link} to={'/otro'}>
								<Typography className={classes.buttonText} variant="subtitle1">
									Iniciar Formación
								</Typography>
							</ButtonRounded>
						</Box>
					</Box>
				</CustomSlide>
			</Grid>
			<Grid item xs={1}>
				<Box height={1} display="flex" alignItems="center" justifyContent="center">
					<IconButton color="primary" onClick={onArrowRight}>
						<PlayArrow />
					</IconButton>
				</Box>
			</Grid>
			<Grid item>
				<Box width="100vw" className={classes.footer}>
					<Dots selected={index} length={2} />
				</Box>
			</Grid>
		</Grid>
	);
};

export default Flow;
