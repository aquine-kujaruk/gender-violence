import React from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	numberBox: {
		width: 24,
		height: 48,
		border: 'solid 2px white',
		borderRadius: 4
	},
	number: {
		color: 'white',
		fontWeight: 'bold'
	}
}));

const NumberBox = ({number}) => {
	const classes = useStyle();
	return (
		<Box
			m={0.2}
			display="flex"
			alignItems="center"
			justifyContent="center"
			className={classes.numberBox}
		>
			<Typography className={classes.number} variant="h4">
				{number}
			</Typography>
		</Box>
	);
};

const FooterHome = () => {
	const classes = useStyle();
	return (
		<Box
			height="80px"
			width="100vw"
			bgcolor="primary.main"
			position="fixed"
			bottom="0"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			{[1, 2, 3, 4, 5].map((number, index) => (
				<NumberBox number={number} key={index} />
			))}
			<Box ml="8px">
				<Typography className={classes.number} variant="body2">
					Personas han
					<br />
					completado la formación
				</Typography>
			</Box>
		</Box>
	);
};

export default FooterHome;
