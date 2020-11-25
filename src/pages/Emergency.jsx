import React from 'react';
import {
	Box,
	makeStyles,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemIcon
} from '@material-ui/core';
import ContainerRounded from '../components/ContainerRounded';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

const useStyle = makeStyles((theme) => ({
	list: {
		width: '100%',
		maxWidth: 360,
		'& .MuiListItemText-primary': {
			fontWeight: 'bold',
			color: theme.palette.primary.main
		},
		'& .MuiListItemText-secondary': {
			fontSize: '1.3rem'
		}
	},
	text: {
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#ff5f2b',
		padding: '0 16px'
	},
	icon: {
		color: theme.palette.primary.main
	}
}));

const Emergency = () => {
	const classes = useStyle();

	return (
		<ContainerRounded noShadow topImage>
			<Box height={1} position="relative">
				<Typography className={classes.text} variant="h5">
					NÚMEROS DE EMERGENCIA <br /> ANTONIO ANTE
				</Typography>
				<Box
					height="calc(80% - 24px)"
					display="flex"
					justifyContent="center"
					boxShadow={10}
					borderRadius={24}
					my="16px"
				>
					<Box style={{overflow: 'scroll'}}>
						<List className={classes.list}>
							<ListItem>
								<ListItemIcon>
									<PhoneInTalkIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary="EMERGENCIAS ECU911" secondary="911" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<PhoneInTalkIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary="POLICÍA NACIONAL ANTONIO ANTE" secondary="062 906 101" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<PhoneInTalkIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText primary="CUERPO DE BOMBEROS ANTONIO ANTE" secondary="062906102" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<PhoneInTalkIcon className={classes.icon} />
								</ListItemIcon>
								<ListItemText
									primary="JUNTA CANTONAL DE PROTECCIÓN DE DERECHOS DE ANTONIO ANTE"
									secondary="062 908 266 EXT 146"
								/>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<PhoneInTalkIcon />
								</ListItemIcon>
								<ListItemText
									primary="CONSEJO CANTONAL DE PROTECCIÓN DE DERECHOS DE ANTONIO ANTE"
									secondary="062908 266"
								/>
							</ListItem>
						</List>
					</Box>
				</Box>
			</Box>
		</ContainerRounded>
	);
};

export default Emergency;
