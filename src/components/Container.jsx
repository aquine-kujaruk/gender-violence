import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './Menu';
import Home from './../pages/Home';

const Container = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	return (
		<div>
			<Navbar open={isOpenMenu} setOpen={setIsOpenMenu} />
			<Menu open={isOpenMenu} setOpen={setIsOpenMenu} />
			<Router>
				<Switch>
					<Route exact path="/otro">
						<Home />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default Container;
