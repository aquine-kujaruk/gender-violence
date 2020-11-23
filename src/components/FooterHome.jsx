import React, {useEffect} from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {getCount} from '../duck';

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
	const dispatch = useDispatch();
	const {count} = useSelector((state) => state.data);

	useEffect(() => {
		dispatch(getCount());
	}, [dispatch]);

	const transform = () => {
		const length = count.toString().length;
		if (length === 6) return count.toString();
		const zeros = '0'.repeat(5 - length);
		return `${zeros}${count}`;
	};

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
			{transform()
				.split('')
				.map((number, index) => (
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
