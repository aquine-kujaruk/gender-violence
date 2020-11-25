import React from 'react';
import {
	Dialog,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Slide,
	Divider,
	ListItemIcon,
	Radio
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {setChangeLanguage, setMenuOpen} from '../duck';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="right" ref={ref} {...props} />;
});

const useStyle = makeStyles((theme) => ({
	root: {
		zIndex: '1099 !important',
		top: `${theme.mixins.toolbar.minHeight + 8}px !important`,

		'& .MuiBackdrop-root': {
			top: `${theme.mixins.toolbar.minHeight + 8}px !important`,
			backgroundColor: '#ffffffbb'
		},
		'& .MuiDialog-paper': {
			boxShadow: 'none',
			backgroundColor: 'transparent'
		}
	},
	list: {
		'& .MuiTouchRipple-child': {
			backgroundColor: theme.palette.primary.main
		},
		'& .MuiListItemText-primary': {
			...theme.typography.h6,
			padding: '0 16px',
			fontWeight: 'bold',
			color: theme.palette.primary.main
		}
	},
	language: {
		'&.unchecked .MuiListItemText-primary': {
			color: '#0000008a'
		}
	},
	divider: {
		backgroundColor: theme.palette.primary.main,
		margin: '16px 0'
	}
}));

const Menu = () => {
	const classes = useStyle();
	const dispatch = useDispatch();
	const {language, menuOpen} = useSelector((state) => state.data);

	return (
		<Dialog
			key="menu"
			id="menu"
			className={classes.root}
			fullScreen
			open={menuOpen}
			TransitionComponent={Transition}
		>
			<List className={classes.list}>
				<ListItem
					button
					component={Link}
					to={'/'}
					color="inherit"
					onClick={() => dispatch(setMenuOpen(false))}
				>
					<ListItemText primary="Inicio" />
				</ListItem>
				<ListItem
					button
					component={Link}
					to={'/mensajes'}
					color="inherit"
					onClick={() => dispatch(setMenuOpen(false))}
				>
					<ListItemText primary="Mensajes" />
				</ListItem>
				<ListItem
					button
					component={Link}
					to={'/numeros-emergencia'}
					color="inherit"
					onClick={() => dispatch(setMenuOpen(false))}
				>
					<ListItemText primary="Números de emergencia" />
				</ListItem>
				<Divider className={classes.divider} />
				<ListItem color="inherit">
					<ListItemText primary="Idioma" />
				</ListItem>
				<ListItem
					button
					style={{paddingLeft: 64}}
					onClick={() => {
						dispatch(setMenuOpen(false));
						dispatch(setChangeLanguage('es'));
					}}
				>
					<ListItemIcon style={{minWidth: 0}}>
						<Radio color="primary" edge="start" checked={language === 'es'} />
					</ListItemIcon>
					<ListItemText
						className={`${classes.language} ${language !== 'es' && 'unchecked'}`}
						primary="Español"
					/>
				</ListItem>
				<ListItem
					button
					style={{paddingLeft: 64}}
					onClick={() => {
						dispatch(setMenuOpen(false));
						dispatch(setChangeLanguage('ki'));
					}}
				>
					<ListItemIcon style={{minWidth: 0}}>
						<Radio color="primary" edge="start" checked={language === 'ki'} />
					</ListItemIcon>
					<ListItemText
						className={`${classes.language} ${language !== 'ki' && 'unchecked'}`}
						primary="Kichwa"
					/>
				</ListItem>
			</List>
		</Dialog>
	);
};

export default Menu;
