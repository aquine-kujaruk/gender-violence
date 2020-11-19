import React from 'react';
import VerticalSlider from './../components/VerticalSlider';
import {Grid} from '@material-ui/core';
import Video from './../components/Video';
import FooterHome from '../components/FooterHome';
import FlowMain from './FlowMain';

const Home = () => {
	return (
		<VerticalSlider blockedUp={[1]}>
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
