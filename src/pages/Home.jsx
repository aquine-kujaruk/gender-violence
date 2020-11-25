import React from 'react';
import VerticalSlider from './../components/VerticalSlider';
import {Grid} from '@material-ui/core';
import Video from './../components/Video';
import FooterHome from '../components/FooterHome';
import FlowMain from './FlowMain';
import {useDispatch} from 'react-redux';
import {setPlayVideo} from './../duck';

const Home = () => {
	const dispatch = useDispatch();
	const onNext = () => dispatch(setPlayVideo(false));

	return (
		<VerticalSlider onNext={onNext} blockedUp={[1]}>
			<Grid container>
				<Grid item>
					<Video />
					<FooterHome />
				</Grid>
			</Grid>
			<FlowMain />
		</VerticalSlider>
	);
};

export default Home;
