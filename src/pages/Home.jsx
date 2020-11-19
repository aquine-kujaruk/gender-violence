import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import VerticalSlider from './../components/VerticalSlider';
import {Grid} from '@material-ui/core';
import Video from './../components/Video';
import FooterHome from '../components/footers/FooterHome';
import Flow from './Flow';

const useStyle = makeStyles((theme) => ({}));

const Home = () => {
	const classes = useStyle();
	return (
		<VerticalSlider>
			<Grid container>
				<Grid item>
					<Video />
					<FooterHome />
				</Grid>
			</Grid>
			<Flow />
		</VerticalSlider>
	);
};

export default Home;
