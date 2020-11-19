import React, {useState} from 'react';
import ReactPageScroller from 'react-page-scroller';
import {Button, makeStyles} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex'
	}
}));

const VerticalSlider = (props) => {
	const {children} = props;
	const classes = useStyle();

	const [currentPage, setCurrentPage] = useState();

	const handlePageChange = (number) => {
		setCurrentPage(number);
	};

	return (
		<div>
			<ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}>
				{children}
				{/* <div className={classes.root} style={{backgroundColor: 'gray'}}>
					<h2 style={{margin: 'auto'}}>First Component</h2>
				</div>
				<div className={classes.root} style={{backgroundColor: 'red'}}>
					<h2 style={{margin: 'auto'}}>Second Component</h2>
				</div>
				<div className={classes.root} style={{backgroundColor: 'blue'}}>
					<h2 style={{margin: 'auto'}}>Third Component</h2>
				</div>
				<div className={classes.root} style={{backgroundColor: 'yellow'}}>
					<h2 style={{margin: 'auto'}}>Fourth Component</h2>
				</div>
				<div className={classes.root} style={{backgroundColor: 'purple'}}>
					<h2 style={{margin: 'auto'}}>Fifth Component</h2>
				</div> */}
			</ReactPageScroller>
		</div>
	);
};

export default VerticalSlider;
