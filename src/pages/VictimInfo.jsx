import React, {useState} from 'react';
import {Box, Divider, Grid, makeStyles, Typography} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';
import ContainerRounded from './../components/ContainerRounded';
import VerticalSlider from './../components/VerticalSlider';
import Video from './../components/Video';
import FooterHome from './../components/FooterHome';

const useStyle = makeStyles((theme) => ({
	header: {
		width: '100%',
		padding: '0 16px'
	},
	headerText: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: '20px 0'
	},
	divider: {
		backgroundColor: theme.palette.primary.main
	}
}));

const VictimInfo = () => {
	const classes = useStyle();

	const [index, setIndex] = useState(0);

	return (
		<VerticalSlider blockedDown={[0]}>
			<ContainerRounded scrollable index={index} setIndex={setIndex}>
				<Grid
					className={classes.root}
					container
					direction="column"
					justify="space-between"
					alignItems="center"
				>
					<Grid item className={classes.header}>
						<Typography className={classes.headerText} variant="h4">
							¡No estas sola!
						</Typography>
						<Divider className={classes.divider} />
					</Grid>
					<Grid item>
						<Box p="16px">
							<Typography variant="body2">
								65 de cada 100 mujeres en el Ecuador, han experimentado por lo menos un hecho de
								algún tipo de violencia en alguno de los distintos ámbitos a lo largo de su vida.
								<br /> <br />
								A pesar de ello, muchas de nosotras no lo denunciamos por miedo o verguenza.
								<br /> <br />
								Incluso terminamos por culparnos a nosotras mismas cuando, en realidad, la culpa
								nunca es nuestra.
								<br /> <br />
								No queremos volver a sentirnos así nunca. No vamos a mirar hacia otro lado nunca
								más. Vamos a sentirnos seguras y tener el control.
								<br /> <br />
								Independientemente de cómo decidas enfrentarte a ello, debes saber que no es tu
								responsabilidad encontrar la reacción perfecta; es su responsabilidad no ser
								violento.
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</ContainerRounded>
			<></>
		</VerticalSlider>
	);
};

export default VictimInfo;
