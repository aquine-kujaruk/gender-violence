import React, {useRef, useState} from 'react';
import {Box, Grid, IconButton, makeStyles, Slide} from '@material-ui/core';
import {PlayArrow} from '@material-ui/icons';
import {useSwipeable} from 'react-swipeable';
import CustomSlide from './../components/CustomSlide';
import Dots from './../components/Dots';

const useStyle = makeStyles((theme) => ({
	headerContainer: {
		height: theme.mixins.toolbar.minHeight + 8 + 60,
		backgroundColor: theme.palette.primary.main
	},
	image: {
		backgroundColor: 'red',
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

	const urls = ['https://i.ibb.co/KrrHYzP/6.jpg', 'https://i.ibb.co/rt0pdtt/8.jpg'];

	return (
		<Grid
			container
			style={{
				backgroundColor: index === 0 ? 'black' : 'white',
				transition: 'background-color 250ms ease'
			}}
		>
			<Grid item>
				<Box width="100vw" className={classes.headerContainer}></Box>
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
					<Box item className={classes.image}>
						<img
							src={urls[index]}
							width="100%"
							height="100%"
							alt="flow"
							style={{objectFit: 'cover'}}
						/>
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
