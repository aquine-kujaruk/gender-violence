import React from 'react';
import {Box, makeStyles} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	dot: {
		width: 8,
		height: 8,
		borderRadius: 2
	}
}));

const Dot = ({isSelected, bgColor = 'primary'}) => {
	const classes = useStyle();
	return (
		<Box
			m={0.2}
			className={classes.dot}
			style={{
				backgroundColor: isSelected ? (bgColor === 'primary' ? '#ff5f2b' : bgColor) : 'transparent',
				border: `solid 1px ${bgColor === 'primary' ? '#ff5f2b' : bgColor}`
			}}
		/>
	);
};

const Dots = ({selected, length, bgColor}) => {
	return (
		<Box height={1} display="flex" alignItems="center" justifyContent="center">
			{[...new Array(length)].map((_, index) => (
				<Dot isSelected={selected === index} key={`dots_${index}`} bgColor={bgColor} />
			))}
		</Box>
	);
};

export default Dots;
