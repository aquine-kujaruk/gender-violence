import React, {useState} from 'react';
import {Box, Button, Divider, Grid, makeStyles, Typography} from '@material-ui/core';
import * as parse from 'html-react-parser';
import ContainerRounded from '../components/ContainerRounded';
import VerticalSlider from '../components/VerticalSlider';
import longArrow from '../assets/long-arrow.png';
import image5d from '../assets/thin-5d.png';
import ButtonCustom from '../components/ButtonCustom';
import {Link} from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%'
	},
	header: {
		width: '100%',
		padding: '0 16px',
		backgroundColor: theme.palette.primary.main,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24
	},
	content: {
		width: '100%',
		padding: '0 16px'
	},
	textContainer: {
		height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 8 + 30 + 48 + 80}px)`
	},
	text: {
		fontWeight: 400
	},
	headerText: {
		fontWeight: '100',
		color: 'white',
		textAlign: 'center',
		padding: '20px 0'
	},
	imageIcon: {
		height: 24
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
	},
	imageHeader: {
		width: '100%'
	}
}));

const Action5DInfo = () => {
	const classes = useStyle();

	const [index, setIndex] = useState(0);

	const data = [
		{
			title: 'Dar asistencia',
			body: `
                Habla directamente a la persona que pretende ser violenta
                <br />
                <br />
                Dile que lo que está haciendo no es correcto. Pero no entres en una discusión.
                Simplemente, pídele que deje a la víctima tranquila o habla con la persona que sufre
                de agresión acerca de lo que está pasando.
                <br />
                <br />
                 <strong>
                     Dirigirse al acosador debe ser el último recurso para evitar la violencia.
                </strong>
                <br />
                <br />
                <span class="primary-color">Tu seguridad y su seguridad es lo primero.</span>
                `
		},
		{
			title: 'Delegar',
			body: `
                Advierte de lo que está ocurriendo a alguien que se encuentre cerca y pregúntale si
                puede hacer algo.
                <br />
                <br />
                También puedes preguntar a una persona con autoridad allá donde estés, ya sea el
                conductor de autobús, la persona de seguridad, un camarero o incluso la policía.
                <br />
                <br />
                <span class="primary-color">Pedir ayuda a otra persona sigue siendo ayudar.</span>
                `
		},
		{
			title: 'Documentar',
			body: `
                Esto puede parecer bastante sencillo, pero antes de que pongas tu cámara en marcha,
                recuerda que lo haces para apoyar a la persona que está siendo acosada, no grabes
                únicamente algo horrible que esté pasando.
                <br />
                <br />
                Y lo más importante de todo: consulta siempre con la víctima lo que quiere hacer con
                la grabación.
                <br />
                <br />
                <span class="primary-color">
                    Nunca publiques nada en línea o lo utilices sin su permiso.
                </span>
            `
		},
		{
			title: 'Dirigirse al atacante',
			body: `
                Habla con la persona que pretende ser violenta
                <br />
                <br />
                Dile que lo que está haciendo no es correcto. Pero no entres en una discusión.
                Simplemente, pídele que deje a la víctima tranquila o habla con la persona que sufre
                acoso acerca de lo que está pasando.
                <br />
                <br />
                Dirigirse al acosador debe ser el último recurso para evitar la violencia.
                <br />
                <br />
                <span class="primary-color">Tu seguridad y su seguridad es lo primero.</span>
            `
		},
		{
			title: 'Distraer',
			body: `
                Distraer es una manera indirecta de desviar la atención de lo que está pasando hacia
                otra cosa. Otras maneras de distraer:
                <br />
                <br />
                <span class="primary-color">•</span>Preguntar por un lugar, la hora o el cajero más
                cercano
                <br />
                <span class="primary-color">•</span>Ponerte en medio
                <br />
                <span class="primary-color">•</span>Llamar la atención
                <br />
                <span class="primary-color">•</span>Tirar algo "accidentalmente" o golpear algo
                <br />
                <br />
                <span class="primary-color">
                        El simple hecho de ponerte al lado de ella y no decir nada también puede funcionar.
                </span>
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
				<Grid className={classes.root} container direction="row">
					<Grid item className={classes.header}>
						<Grid container>
							<Grid item xs={2}>
								<Box height={1} display="flex" alignItems="center">
									<img alt="" className={classes.imageHeader} src={image5d} />
								</Box>
							</Grid>
							<Grid item xs={10}>
								<Typography className={classes.headerText} variant="h4">
									{data[index].title}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.textContainer}>
						<Grid
							className={classes.textContainer}
							container
							direction="row"
							justify="space-between"
							alignItems="center"
						>
							<Grid item>
								<Box position="relative" p="16px">
									<Typography variant="subtitle2" className={classes.text}>
										{parse(data[index].body)}
									</Typography>
								</Box>
							</Grid>
							<Grid item className={classes.content}>
								{index !== data.length - 1 ? (
									<Box display="flex" justifyContent="center" pb="5%">
										<Button onClick={next}>
											<img alt="" className={classes.imageIcon} src={longArrow} />
										</Button>
									</Box>
								) : (
									<Box display="flex" justifyContent="center" pb="5%">
										<Button component={Link} to={'/felicitaciones'}>
											<img alt="" className={classes.imageIcon} src={longArrow} />
										</Button>
									</Box>
								)}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</ContainerRounded>
			<></>
		</VerticalSlider>
	);
};

export default Action5DInfo;
