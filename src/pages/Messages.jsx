import React, {useState} from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import ContainerRounded from '../components/ContainerRounded';
import author1 from '../assets/author-1.png';
import author2 from '../assets/author-2.png';
import author3 from '../assets/author-3.png';
import author4 from '../assets/author-4.png';
import author5 from '../assets/author-5.png';
import author6 from '../assets/author-6.png';
import * as parse from 'html-react-parser';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%',
		overflow: 'scroll'
	},
	imageHeader: {
		objectFit: 'contain',
		height: '100%',
		position: 'relative',
		top: 16
	},
	text: {
		fontWeight: '500',
		textAlign: 'center',
		color: '#ff5f2b'
	},
	textSecondary: {
		fontWeight: '500',
		textAlign: 'center'
	},
	textBody: {
		fontWeight: '400'
	},
	buttonText: {
		height: '1.4rem',
		fontWeight: 'bold',
		fontSize: '0.9rem',
		color: '#ff5f2b',
		textTransform: 'none'
	},
	button: {
		borderColor: '#ff5f2b'
	}
}));

const Messages = () => {
	const classes = useStyle();

	const [index, setIndex] = useState(0);

	const data = [
		{
			author: 'Ing. Rolando López',
			authorTitle: 'ALCALDE DE ANTONIO ANTE',
			body: `
            La violencia contra mujeres y niñas es una violación de los derechos humanos, es violencia contra familias, comunidades, naciones y la propia humanidad. Es por eso que, al conmemorar el Día Internacional para la Eliminación de la Violencia contra la Mujer, como GAD Municipal de Antonio Ante, reafirmamos nuestro compromiso para fomentar actitudes y comportamientos colectivos que nos permita empoderar a las mujeres de sus derechos.
			<br /> 
			Este 25 de Noviembre hacemos un llamado a la reflexión a todos nuestros anteños y anteñas para que desde cada espacio, contribuyamos a eliminar toda clase de maltrato, creando a la vez, acciones de respeto para las mujeres y las niñas, quienes son fundamentales para el desarrollo de una sociedad equitativa y justa. 
`
		},
		{
			author: 'Ing. Catalina Yépez',
			authorTitle: 'CONCEJALA DE ANTONIO ANTE',
			body: `
            La violencia contra las mujeres es un obstáculo para construir sociedades inclusivas y sostenibles, por eso, hoy, alzamos nuestra voz por la igualdad de género y la no violencia.
			<br /> 
			Este día es propicio para recordar que las mujeres debemos estar en el centro del cambio, que somos vida, que somos amor. En conmemoración del Día Internacional para la Eliminación de la Violencia contra la Mujer, estamos empeñadas en coordinar acciones que fomenten la conciencia ciudadana, eliminado toda forma de maltrato.
			<br /> 
			¡Por más espacios de dignidad, respeto a nuestros derechos y autoestima!
			`
		},
		{
			author: 'Sr. José Luis Yamberla',
			authorTitle: 'CONCEJAL DE ANTONIO ANTE',
			body: `
            Hoy día para reflexionar sobre la violencia que padecen las mujeres y niñas, lo cual representa un gran obstáculo para la realización de los derechos humanos y un desafío directo a la inclusión y la participación de las mujeres en varios ámbitos.
			<br /> 
			Dominémonos a nosotros mismos y después controlemos toda la maldad que veamos a nuestro alrededor. Hagámoslo por medio de la persuasión, de la paciencia, del deseo de perdonar, del amor sincero, y de esa forma volveremos el corazón, el afecto y las almas de los hijos de los hombres a la verdad, tal cual Dios nos la ha revelado.
			<br /> 
			Les invito a trabajar todos unidos para que no haya nunca más ni una sola mujer o niña maltratada.
			`
		},
		{
			author: 'Pilar Pastrana',
			authorTitle: 'PRESIDENTA DE LA FUNDACIÓN DE REINAS DE ANTONIO ANTE',
			body: `
            En este Día Internacional alzamos nuestra voz porque queremos un mundo libre de violencia contra las mujeres y niñas. 
			<br /> 
			Hoy, es el momento propicio para intensificar los esfuerzos para garantizar el derecho a una vida libre de todo tipo de violencias como una tarea de hombres y mujeres. 
			<br /> 
			Es necesario comprometerse con un cambio urgente para alcanzar un futuro próspero en donde por fin pongamos fin a la violencia y podamos empoderar a todas las mujeres y así alcanzar la igualdad de género.    
			`
		},
		{
			author: 'Alejanda López',
			authorTitle: 'REINA DE ANTONIO ANTE',
			body: `
            El empoderamiento de las mujeres es uno de los factores básicos para lograr la igualdad de género y encaminarnos hacia la eliminación de todo tipo de violencia.
			<br /> 
			En este día, quiero enviar un mensaje a todas las mujeres y niñas para que sientan su valor, para que hagan respetar sus derechos y nunca nadie les haga dudar de su poder. 
			<br /> 
			Invito a los hombres a la reflexión para que sean guardianes de sus madres, sus parejas, sus hijas, tías, abuelas y de todas las mujeres para que al fin podamos acabar con esta problemática social.
			<br /> 
			<div style="display: flex; flex-wrap: wrap;">
				<span style="textAlign: center; width: 100%">“Mujer, defiende tu vida,</span>
				<br /> 
				<span style="textAlign: center; width: 100%">lucha por tu independencia,</span>
				<br /> 
				<span style="textAlign: center; width: 100%">busca tu felicidad</span>
				<br /> 
				<span style="textAlign: center; width: 100%">y aprende a quererte”</span>
			</div>
			`
		},
		{
			author: 'Paulina Díaz',
			authorTitle: 'LÍDER DE LAS MUJERES ANTEÑAS',
			body: `
            Gracias al creador por realizar a la perfección su máxima obra la “MUJER”, a la cual me siento muy orgullosa siendo mujer KIchwa llevando mis orígenes muy dentro de mi ser. 
			Es una oportunidad para avanzar con la expectativa de cómo se vivirá el día, a mi alrededor observo a mis warmis – mujeres que con gran alegría inician sus labores tanto económicos como familiares, volviéndolas un eje imprescindible e importante en el desarrollo de nuestra sociedad,
			Al reconocernos como valiosas y concienciar acerca de nuestro derecho al   decir basta al ayudarnos mutuamente en este tema muy enraizado en nuestra sociedad. No callar cuando sufrimos violencia es el primer paso para nuestro bienestar, Hacerles saber a nuestras warmis-  mujeres que no estamos solas que siempre encontraremos unas manos amigas para salir de este mal y así poder tener una vida equilibrada y feliz.  ¡Queremos vivir en una sociedad libre de vilencia! 
			ario comprometerse con un cambio urgente para alcanzar un futuro próspero en donde por fin pongamos fin a la violencia y podamos empoderar a todas las mujeres y así alcanzar la igualdad de género.    
			`
		}
	];

	const images = [author1, author2, author3, author4, author5, author6];

	return (
		<ContainerRounded
			noShadow
			topImage
			scrollable
			index={index}
			setIndex={setIndex}
			length={data.length}
		>
			<Box height={1} position="relative">
				<Box height={0.18} display="flex" justifyContent="center">
					<img alt="" className={classes.imageHeader} src={images[index]} />
				</Box>
				<Box
					height="calc(82% - 24px)"
					display="flex"
					justifyContent="center"
					alignItems="center"
					boxShadow={10}
					borderRadius={24}
					p="16px"
				>
					<Grid className={classes.root} container direction="row" justify="space-between">
						<Grid item xs={12}>
							<Typography className={classes.textBody} variant="body2">
								{parse(data[index].body)}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.textSecondary} variant="h5">
								{data[index].author}
							</Typography>
							<Typography className={classes.textSecondary} variant="subtitle2">
								{data[index].authorTitle}
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</ContainerRounded>
	);
};

export default Messages;
