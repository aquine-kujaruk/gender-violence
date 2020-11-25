import React, {useRef, useState, useEffect} from 'react';
import {makeStyles, Box, IconButton} from '@material-ui/core';
import video from '../assets/video.mp4';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import {useSelector, useDispatch} from 'react-redux';
import {setPlayVideo} from './../duck';

const useStyle = makeStyles((theme) => ({
	video: {
		marginTop: theme.mixins.toolbar.minHeight + 8,
		height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 8}px)`,
		objectFit: 'cover',
		width: '100vw',
		display: 'block',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	},
	button: {
		transition: 'transform 0.5s ease',
		boxShadow: theme.shadows[12],
		backgroundColor: theme.palette.primary.main,
		'&:hover': {
			background: theme.palette.primary.main
		}
	},
	iconButton: {
		color: 'white'
	}
}));

const Video = () => {
	const classes = useStyle();
	const vidRef = useRef(null);

	const dispatch = useDispatch();
	const {playVideo} = useSelector((state) => state.data);

	useEffect(() => {
		if (playVideo) vidRef.current.play();
		else vidRef.current.pause();
	}, [playVideo]);

	return (
		<Box>
			<Box
				zIndex="tooltip"
				display="flex"
				justifyContent="center"
				alignItems="center"
				width={1}
				height="calc(100% - 80px)"
				position="absolute"
			>
				<IconButton
					className={classes.button}
					onClick={() => dispatch(setPlayVideo(false))}
					style={{
						transform: `scale(${playVideo ? 1 : 0})`,
						position: 'absolute',
						bottom: 65,
						right: 16
					}}
				>
					<PauseRoundedIcon fontSize="large" className={classes.iconButton} />
				</IconButton>
				<IconButton
					className={classes.button}
					onClick={() => dispatch(setPlayVideo(true))}
					style={{transform: `scale(${playVideo ? 0 : 1})`}}
				>
					<PlayArrowRoundedIcon fontSize="large" className={classes.iconButton} />
				</IconButton>
			</Box>
			<video ref={vidRef} className={classes.video} src={video} />
		</Box>
	);
};

export default Video;
