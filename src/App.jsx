import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import theme from './theme';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Home from './pages/Home';
import Victim from './pages/Victim';
import VictimInfo from './pages/VictimInfo';

function App() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<ThemeProvider theme={theme}>
			<Navbar open={isOpenMenu} setOpen={setIsOpenMenu} />
			<Menu open={isOpenMenu} setOpen={setIsOpenMenu} />
			<Router>
				<Switch>
					<Route exact path="/victima/info">
						<VictimInfo />
					</Route>
					<Route exact path="/victima">
						<Victim />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
