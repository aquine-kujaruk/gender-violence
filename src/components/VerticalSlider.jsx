import React, {useState} from 'react';
import ReactPageScroller from 'react-page-scroller';

const VerticalSlider = (props) => {
	const {children} = props;
	const blockedUp = props.blockedUp || [];
	const blockedDown = props.blockedDown || [];

	const [currentPage, setCurrentPage] = useState();
	const [blockScrollUp, setBlockScrollUp] = useState(false);
	const [blockScrollDown, setBlockScrollDown] = useState(false);

	const handlePageChange = (number) => {
		setCurrentPage(number);

		if (blockedUp.includes(number)) setBlockScrollUp(true);
		else setBlockScrollUp(false);

		if (blockedDown.includes(number)) setBlockScrollDown(true);
		else setBlockScrollDown(false);
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
};

export default VerticalSlider;
