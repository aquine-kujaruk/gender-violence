import React, {useState} from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';
import ContainerRounded from './../components/ContainerRounded';
import headerImage from '../assets/1-2.png';

const useStyle = makeStyles((theme) => ({
	imageHeader: {
		objectFit: 'contain',
		height: '100%'
	}
}));

const MergeFlows = () => {
	const classes = useStyle();

	return (
		<ContainerRounded noShadow>
			<Box height={1} position="relative">
				<Box height={0.3} display="flex" justifyContent="center">
					<img alt="" className={classes.imageHeader} src={headerImage} />
				</Box>
				<Box
					height={0.7}
					display="flex"
					justifyContent="center"
					alignItems="center"
					boxShadow={10}
					borderRadius={24}
				>
					Prueba
				</Box>
			</Box>
		</ContainerRounded>
	);
};

export default MergeFlows;
