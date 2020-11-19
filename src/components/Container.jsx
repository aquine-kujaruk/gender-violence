import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './Menu';
import Home from './../pages/Home';
import AnimatedSwitch from './AnimatedSwitch';
import AnimatedRoute from './AnimatedRoute';

const Container = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	return (
		<div>
			<Navbar open={isOpenMenu} setOpen={setIsOpenMenu} />
			<Menu open={isOpenMenu} setOpen={setIsOpenMenu} />
			<Router>
				<AnimatedSwitch animationClassName="page-slide-enter" animationTimeout={300}>
					<AnimatedRoute path="/otro">
						<Home />
					</AnimatedRoute>
					<AnimatedRoute path="/">
						<Home />
					</AnimatedRoute>
				</AnimatedSwitch>
			</Router>
		</div>
	);
};

export default Container;
