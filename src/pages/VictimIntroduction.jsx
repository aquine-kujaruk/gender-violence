import React, {useState} from 'react';
import {Box, Button, Divider, Grid, makeStyles, Typography} from '@material-ui/core';
import * as parse from 'html-react-parser';
import ContainerRounded from '../components/ContainerRounded';
import VerticalSlider from '../components/VerticalSlider';
import longArrow from '../assets/long-arrow.png';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%'
	},
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
	},
	imageIcon: {
		height: 24,
		paddingBottom: 16
	},
	buttonImageIcon: {
		width: '1.8rem',
		transform: 'scaleY(0.6)',
		paddingLeft: 4
	},
	buttonText: {
		height: '1.4rem',
		fontWeight: 'bold',
		fontSize: '0.9rem',
		color: '#ff5f2b'
	}
}));

const VictimIntroduction = () => {
	const classes = useStyle();

	const [index, setIndex] = useState(0);

	const data = [
		{
			title: '¡No estás sola!',
			body: `
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
            violento.`
		},
		{
			title: 'Siempre tiene importancia',
			body: `
            Cada acto de violencia nos afecta más de lo que creemos: modifica nuestro comportamiento, 
            cuestiona nuestra confianza, debilita nuestra autoestima. 
            <br /> <br />
            Nos hace evitar ciertos lugares, replantearnos nuestra apariencia y 
            sentirnos inseguros cuando salimos solos. 
            <br /> <br />
            Sin embargo, se ha demostrado que el hecho de reaccionar de algún modo cuando esto ocurre, 
            ya sea en ese momento o más tarde, reduce el efecto negativo.`
		},
		{
			title: 'Confía siempre en tus instintos',
			body: `
            Escucha lo que te dice tu interior:
            <br /> <br />
            • ¿Te sientes a salvo como para reaccionar?
            <br />
            • ¿Hay gente alrededor?
            <br />
            • ¿Te encuentras en un lugar bien iluminado?
            <br />
            • ¿Hay una salida cercana?
            <br /> <br />
            Pase lo que pase, respira profundamente y mantén la calma, la tranquilidad y la serenidad.
            En realidad, la reacción perfecta no existe.
            <br /> <br />
            Pero existen diferentes reacciones con las que puedes responder. Puesto que si decides responder, lo haces por ti.
            <br /> <br />
            ¿Te has visto en una situacion así?
            <br />
            Encuentra la manera de reaccionar aqui.
            `
		}
	];

	const next = () => {
		if (index === data.length - 1) setIndex(0);
		else setIndex(index + 1);
	};

	return (
		<VerticalSlider blockedDown={[0]}>
			<ContainerRounded
				scrollable
				index={index}
				setIndex={setIndex}
				length={data.length}
				disableLeft={index === 0}
				disableRight={index === data.length - 1}
			>
				<Grid
					className={classes.root}
					container
					direction="row"
					justify="space-between"
					alignItems="center"
				>
					<Grid item className={classes.header}>
						<Typography className={classes.headerText} variant="h4">
							{data[index].title}
						</Typography>
						<Divider className={classes.divider} />
					</Grid>
					<Grid item>
						<Box position="relative" p="16px">
							<Typography variant="body2">{parse(data[index].body)}</Typography>
						</Box>
					</Grid>
					<Grid item className={classes.header}>
						{index !== data.length - 1 ? (
							<Box display="flex" justifyContent="center">
								<Button onClick={next}>
									<img alt="" className={classes.imageIcon} src={longArrow} />
								</Button>
							</Box>
						) : (
							<Box mb="16px" display="flex" justifyContent="center">
								<ButtonCustom
									variant="outlined"
									type="outlined"
									component={Link}
									to={'/victima/tipo'}
								>
									<Box display="flex" justifyContent="center">
										<Typography className={classes.buttonText} variant="subtitle1">
											Veamos que puedes hacer
										</Typography>
										<img alt="" className={classes.buttonImageIcon} src={longArrow} />
									</Box>
								</ButtonCustom>
							</Box>
						)}
					</Grid>
				</Grid>
			</ContainerRounded>
			<></>
		</VerticalSlider>
	);
};

export default VictimIntroduction;
