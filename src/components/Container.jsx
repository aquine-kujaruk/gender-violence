import React, {useState} from 'react';
import {Box, makeStyles} from '@material-ui/core';
import Navbar from './Navbar';
import Menu from './Menu';
import Home from './../pages/Home';

const useStyle = makeStyles((theme) => ({}));

const Container = () => {
	const classes = useStyle();

	const [isOpenMenu, setIsOpenMenu] = useState(false);

	return (
		<div>
			<Navbar open={isOpenMenu} setOpen={setIsOpenMenu} />
			<Menu open={isOpenMenu} setOpen={setIsOpenMenu} />
			<Home />
		</div>
	);
};

export default Container;
