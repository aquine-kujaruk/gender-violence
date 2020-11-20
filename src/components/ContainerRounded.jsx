import React, {useRef} from 'react';
import {Box, Grid, IconButton, makeStyles} from '@material-ui/core';
import {PlayArrow} from '@material-ui/icons';
import {useSwipeable} from 'react-swipeable';
import CustomSlide from '../components/CustomSlide';
import Dots from '../components/Dots';

const useStyle = makeStyles((theme) => ({
	headerContainer: {
		height: theme.mixins.toolbar.minHeight + 8,
		'&.text-header': {
			height: theme.mixins.toolbar.minHeight + 8 + 60,
			backgroundColor: theme.palette.primary.main
		}
	},
	container: {
		height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 8 + 48}px)`,
		margin: '24px 0',
		borderRadius: 24,
		overflow: 'hidden',
		backgroundColor: 'transparent',
		boxShadow: theme.shadows[12],
		'&.scrollable': {
			height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 8 + 30 + 48}px)`
		},
		'&.scrollable.text-header': {
			height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 8 + 60 + 30 + 48}px)`
		}
	},
	footer: {
		height: 30
	},
	inverted: {
		transform: 'rotate(180deg)'
	}
}));

const ContainerRounded = (props) => {
	const {
		children,
		textHeader,
		scrollable,
		header,
		index,
		setIndex,
		bgColor,
		length,
		disableLeft,
		disableRight
	} = props;

	const classes = useStyle();
	const childRef = useRef();

	const onArrowLeft = () => {
		if (scrollable && !disableLeft) childRef.current.onArrowClick('left');
	};
	const onArrowRight = () => {
		if (scrollable && !disableRight) childRef.current.onArrowClick('right');
	};

	const handlers = useSwipeable({
		onSwipedLeft: onArrowRight,
		onSwipedRight: onArrowLeft
	});

	return (
		<Grid
			container
			style={{
				backgroundColor: bgColor,
				transition: 'background-color 250ms ease'
			}}
		>
			<Grid item>
				<Box
					width="100vw"
					className={`${classes.headerContainer} ${textHeader ? 'text-header' : ''}`}
					display="flex"
					justifyContent="center"
				>
					{header}
				</Box>
			</Grid>
			<Grid item xs={1}>
				{scrollable && !disableLeft && (
					<Box height={1} display="flex" alignItems="center" justifyContent="center">
						<IconButton color="primary" onClick={onArrowLeft}>
							<PlayArrow className={classes.inverted} />
						</IconButton>
					</Box>
				)}
			</Grid>
			{scrollable ? (
				<Grid item xs={10} {...handlers}>
					<CustomSlide ref={childRef} index={index} setIndex={setIndex} length={length}>
						<Box
							elevation={3}
							position="relative"
							className={`${classes.container} ${scrollable ? 'scrollable' : ''} ${
								textHeader ? 'text-header' : ''
							}`}
						>
							{children}
						</Box>
					</CustomSlide>
				</Grid>
			) : (
				<Grid item xs={10}>
					<Box
						position="relative"
						className={`${classes.container} ${scrollable ? 'scrollable' : ''} ${
							textHeader ? 'text-header' : ''
						}`}
					>
						{children}
					</Box>
				</Grid>
			)}

			<Grid item xs={1}>
				{scrollable && !disableRight && (
					<Box height={1} display="flex" alignItems="center" justifyContent="center">
						<IconButton color="primary" onClick={onArrowRight}>
							<PlayArrow />
						</IconButton>
					</Box>
				)}
			</Grid>
			{scrollable && (
				<Grid item>
					<Box width="100vw" className={classes.footer}>
						<Dots selected={index} length={length} />
					</Box>
				</Grid>
			)}
		</Grid>
	);
};

export default ContainerRounded;
