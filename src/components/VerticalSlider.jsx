import React, {forwardRef, useImperativeHandle, useState} from 'react';
import ReactPageScroller from 'react-page-scroller';

const VerticalSlider = forwardRef((props, ref) => {
	const {children} = props;
	const blockedUp = props.blockedUp || [];
	const blockedDown = props.blockedDown || [];

	const [currentPage, setCurrentPage] = useState();
	const [blockScrollUp, setBlockScrollUp] = useState(false);
	const [blockScrollDown, setBlockScrollDown] = useState(false);

	useImperativeHandle(ref, () => ({
		onNext() {
			setCurrentPage(currentPage + 1);
		}
	}));

	const handlePageChange = (number) => {
		setCurrentPage(number);

		if (blockedUp.includes(number)) setBlockScrollUp(true);
		else setBlockScrollUp(false);

		if (blockedDown.includes(number)) setBlockScrollDown(true);
		else setBlockScrollDown(false);

		props.onNext();
	};

	return (
		<div>
			<ReactPageScroller
				blockScrollUp={blockScrollUp}
				blockScrollDown={blockScrollDown}
				pageOnChange={handlePageChange}
				customPageNumber={currentPage}
			>
				{children}
			</ReactPageScroller>
		</div>
	);
});

export default VerticalSlider;
