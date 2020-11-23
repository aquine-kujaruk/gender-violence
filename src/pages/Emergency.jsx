import React from 'react';
import {Box, makeStyles, Typography, List, ListItem, ListItemText} from '@material-ui/core';
import ContainerRounded from '../components/ContainerRounded';

const useStyle = makeStyles((theme) => ({
	list: {
		width: '100%',
		maxWidth: 360,
		'& *': {
			color: theme.palette.primary.main
		}
	},
	text: {
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#ff5f2b',
		padding: '0 16px'
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
					<Box display="flex" justifyContent="center" alignItems="center">
						<List className={classes.list}>
							<ListItem>
								<ListItemText primary="Policía Nacional" secondary="+593-98-400-3182" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Comisaría Nacional" secondary="+593-98-400-3182" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Cuerpo de Bomberos" secondary="+593-98-400-3182" />
							</ListItem>
							<ListItem>
								<ListItemText
									primary="Consejo Cantonal de Protección de Derechos"
									secondary="+593-98-400-3182"
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
