import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	video: {
		marginTop: theme.mixins.toolbar.minHeight + 8,
		height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 8}px - 80px)`,
		objectFit: 'cover',
		width: '100vw',
		display: 'block',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	}
}));

const Video = () => {
	const classes = useStyle();
	return (
		<video
			className={classes.video}
			loop
			autoPlay
			muted
			src="https://static.videezy.com/system/resources/previews/000/017/941/original/ICON-VERSION9.mp4"
			title="title"
		></video>
	);
};

export default Video;
