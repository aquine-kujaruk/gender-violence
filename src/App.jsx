import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import theme from './theme';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Home from './pages/Home';
import Victim from './pages/Victim';
import VictimIntroduction from './pages/VictimIntroduction';
import VictimType from './pages/VictimType';
import VictimInfoIntro from './pages/VictimInfoIntro';
import VictimInfo from './pages/VictimInfo';
import VictimActionIntro from './pages/VictimActionIntro';
import VictimAction from './pages/VictimAction';
import {Box} from '@material-ui/core';
import VictimToWitness from './pages/VictimToWitness';
import StopAbuse from './pages/StopAbuse';
import StopAbuseIntro from './pages/StopAbuseIntro';
import StopAbuseCases from './pages/StopAbuseCases';

function App() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<ThemeProvider theme={theme}>
			<Navbar open={isOpenMenu} setOpen={setIsOpenMenu} />
			<Menu open={isOpenMenu} setOpen={setIsOpenMenu} />
			<Router>
				<Switch>
					<Route exact path="/detenlo/elegir-caso">
						<StopAbuseCases />
					</Route>
					<Route exact path="/detenlo/intro">
						<StopAbuseIntro />
					</Route>
					<Route exact path="/detenlo">
						<StopAbuse />
					</Route>
					<Route exact path="/victima/ver-testigo">
						<VictimToWitness />
					</Route>
					<Route exact path="/victima/accion/intro">
						<VictimActionIntro />
					</Route>
					<Route exact path="/victima/accion">
						<VictimAction />
					</Route>
					<Route exact path="/victima/info/intro">
						<VictimInfoIntro />
					</Route>
					<Route exact path="/victima/info">
						<VictimInfo />
					</Route>
					<Route exact path="/victima/tipo">
						<VictimType />
					</Route>
					<Route exact path="/victima/introduccion">
						<VictimIntroduction />
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
