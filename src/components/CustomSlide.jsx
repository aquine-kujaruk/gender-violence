import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Slide} from '@material-ui/core';

const CustomSlide = forwardRef((props, ref) => {
	const {children, index, setIndex, length} = props;

	const [slideIn, setSlideIn] = useState(true);
	const [slideDirection, setSlideDirection] = useState('left');

	useImperativeHandle(ref, () => ({
		onArrowClick(direction) {
			const increment = direction === 'left' ? -1 : 1;
			const newIndex = (index + increment + length) % length;

			const oppDirection = direction === 'left' ? 'right' : 'left';
			setSlideDirection(direction);
			setSlideIn(false);

			setTimeout(() => {
				setIndex(newIndex);
				setSlideDirection(oppDirection);
				setSlideIn(true);
			}, 250);
		}
	}));

	return (
		<Slide in={slideIn} direction={slideDirection}>
			{children}
		</Slide>
	);
});

export default CustomSlide;
