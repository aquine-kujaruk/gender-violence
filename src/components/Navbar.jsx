import React from 'react';
import {AppBar, IconButton, makeStyles, Toolbar, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ToggleIcon from 'material-ui-toggle-icon';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		position: 'fixed',
		zIndex: 5000,
		'& header': {
			backgroundColor: 'white'
		}
	},
	offset: theme.mixins.toolbar,
	toggleIcon: {
		width: 40,
		height: 40
	},
	separator: {
		flexGrow: 1
	},
	logo: {
		height: theme.mixins.toolbar.minHeight - 4
	}
}));

const Navbar = ({open, setOpen}) => {
	const classes = useStyle();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" color="inherit" elevation={0}>
				<Toolbar>
					<IconButton edge="start" color="primary" aria-label="menu" onClick={() => setOpen(!open)}>
						<ToggleIcon
							className={classes.toggleIcon}
							on={open}
							onIcon={<CloseIcon />}
							offIcon={<MenuIcon />}
						/>
					</IconButton>
					<div className={classes.separator} />
					<Button component={Link} to={'/'} color="inherit">
						<img className={classes.logo} src={logo} alt="6" border="0" />
					</Button>
				</Toolbar>
			</AppBar>
			<div className={classes.offset}></div>
		</div>
	);
};

export default Navbar;
