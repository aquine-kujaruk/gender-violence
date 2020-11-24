import React from 'react';
import {Dialog, makeStyles, Slide, Box, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const useStyle = makeStyles((theme) => ({
	root: {
		zIndex: '1099 !important',
		top: 0,

		'& .MuiBackdrop-root': {
			top: 0,
			backgroundColor: '#ffffffbb'
		},
		'& .MuiDialog-paper': {
			boxShadow: 'none',
			backgroundColor: 'transparent'
		}
	}
}));

const Loader = () => {
	const classes = useStyle();
	const {loader} = useSelector((state) => state.data);

	return (
		<Dialog
			key="loader"
			id="loader"
			className={classes.root}
			fullScreen
			open={loader}
			TransitionComponent={Transition}
		>
			<Box width={1} height={1} display="flex" justifyContent="center" alignItems="center">
				<CircularProgress color="primary" />
			</Box>
		</Dialog>
	);
};

export default Loader;
