import React from 'react';
import {Dialog, List, ListItem, ListItemText, makeStyles, Slide} from '@material-ui/core';

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
	}
}));

const Menu = ({open}) => {
	const classes = useStyle();

	return (
		<Dialog className={classes.root} fullScreen open={open} TransitionComponent={Transition}>
			<List className={classes.list}>
				<ListItem button>
					<ListItemText primary="Inicio" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Mensajes" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Estadísticas" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Números de emergencia" />
				</ListItem>
			</List>
		</Dialog>
	);
};

export default Menu;
