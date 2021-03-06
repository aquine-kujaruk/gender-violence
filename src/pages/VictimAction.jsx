import React, {Fragment, useEffect, useRef} from 'react';
import {Box, Button, Grid, makeStyles, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import * as parse from 'html-react-parser';
import Container from './../components/Container';
import longArrow from '../assets/long-arrow.png';
import firstImage from '../assets/4-1.jpg';
import secondImage from '../assets/5-1.jpg';
import VerticalSlider from './../components/VerticalSlider';
import {useSelector} from 'react-redux';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%'
	},
	headerContainer: {
		height: '100%',
		padding: '8px 16px'
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center'
	},
	subtitle: {
		textAlign: 'center',
		lineHeight: 1.2
	},
	textContainer: {
		borderBottomLeftRadius: '24px',
		boxShadow:
			'rgba(0, 0, 0, 0.05) 0px 5px 5px -3px, rgba(0, 0, 0, 0.15) 0px 8px 10px 1px, rgba(0, 0, 0, 0.05) 0px 3px 14px 2px',
		'&.inverted': {
			borderBottomLeftRadius: 0,
			borderBottomRightRadius: '24px',
			left: 0
		}
	},
	imageContainer: {
		borderBottomRightRadius: '24px',
		borderTopRightRadius: '24px',
		boxShadow: 'inset 0px -16px 24px 0px #000000d1',
		backgroundColor: 'white',
		border: 'solid 2px #fe5f2b',
		borderLeft: 'none',
		'&.inverted': {
			right: 0,
			borderRadius: 0,
			borderBottomLeftRadius: '24px',
			borderTopLeftRadius: '24px',
			borderRight: 'none',
			borderLeft: 'solid 2px #fe5f2b'
		}
	},
	buttonImageIcon: {
		transform: 'rotate(90deg)',
		height: 16,
		'&.isLast': {
			transform: 'inherit'
		}
	},
	text: {
		height: '75%',
		paddingTop: '25%',
		paddingLeft: 16,
		paddingRight: 16,
		'&.fullHeight': {
			paddingTop: '30%'
		}
	},
	imageText: {
		color: 'white',
		fontWeight: '500',
		position: 'absolute',
		bottom: 0,
		padding: 8,
		textShadow: '1px 1px 2px #00000075'
	}
}));

const useClientRect = () => {
	const [rect, setRect] = React.useState(null);
	const ref = React.useCallback((node) => {
		if (node !== null) {
			setRect(node.getBoundingClientRect());
		}
	}, []);
	return [rect, ref];
};

const Content = (props) => {
	const {onNext, bodyHeight, imageWidth, imageHeight, inverted, isLast, fullHeight, info} = props;
	const classes = useStyle();
	const [rect, ref] = useClientRect();

	useEffect(() => {
		console.log(rect?.height);
	}, [rect]);

	return (
		<Fragment>
			<Box height={bodyHeight} width={1} position="relative">
				<Box
					mt="20%"
					height={0.6}
					width={1}
					style={{backgroundColor: '#ff5f2b'}}
					position="absolute"
				></Box>
				<Box
					mt="20%"
					height={0.8}
					width={0.9}
					style={{backgroundColor: 'white'}}
					position="absolute"
					right="0"
					className={`${classes.textContainer} ${inverted && 'inverted'}`}
				>
					<Box
						className={`${classes.text} ${fullHeight && 'fullHeight'}`}
						display="flex"
						justifyContent="center"
						alignItems="center"
						position="relative"
					>
						<Typography ref={ref} variant="body1" style={{fontSize: '0.8rem'}}>
							{parse(info.text)}
						</Typography>
					</Box>
				</Box>
				<Box
					mt="4px"
					height={imageHeight}
					width={imageWidth}
					position="absolute"
					boxShadow={10}
					className={`${classes.imageContainer} ${inverted && 'inverted'}`}
					style={{
						background: `url(${info.image})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}
				>
					<Typography
						className={classes.imageText}
						style={inverted ? {left: 0} : {right: 0}}
						variant="h4"
					>
						{info.title}
					</Typography>
				</Box>
			</Box>
			<Box height={0.1} width={1} display="flex" justifyContent="center" alignItems="center">
				{isLast ? (
					<Button component={Link} to={'/victima/ver-testigo'}>
						<img
							alt=""
							className={`${classes.buttonImageIcon} ${isLast && 'isLast'}`}
							src={longArrow}
						/>
					</Button>
				) : (
					<Button style={{height: 40}} onClick={onNext}>
						<img alt="" className={classes.buttonImageIcon} src={longArrow} />
					</Button>
				)}
			</Box>
		</Fragment>
	);
};

const VictimAction = () => {
	const classes = useStyle();
	const childRef = useRef();
	const {language} = useSelector((state) => state.data);

	const onNext = () => {
		childRef.current.onNext();
	};

	const data = {
		es: [
			{
				title: 'Dí algo',
				image: firstImage,
				text: `
					Dile a la persona que te acosa o pretende ser violenta que pare de hacerlo, que se
					aleje de ti o pregúntale por qué te hace sentir incómoda.
					<br /> Una vez que establezcas los límites, no mantengas un diálogo con ella, en ese
					momento no estará predispuesta a aprender.
					<br />
					<span class="primary-color">Ponte a salvo.</span>
				`
			},
			{
				title: 'Pide ayuda',
				image: secondImage,
				text: `
					<span class="primary-color">
						Puedes pedir ayuda a alguien que se encuentre cerca.
					</span>
					<br />
					Si te encuentras rodeada de gente, pero nadie vio lo sucedido, cuéntales exactamente
					lo que el acosador dijo o hizo y describe cómo va vestido para que los testigos puedan
					identificarlo.
					<br />
					Puedes pedirles que se queden contigo un rato o que contacten con un representante de
					la autoridad.`
			},
			{
				title: 'Grábalo',
				image: firstImage,
				text: `
					Si te sientes a salvo, piensa en hacer una foto o un vídeo de lo que está ocurriendo,
					o pídele a un testigo que lo haga. <br />
					Asegúrate de grabar claramente la ubicación y al acosador. Consulta los recursos
					legales locales para ver cómo puedes denunciar el acoso utilizando tu grabación.`
			}
		],
		ki: [
			{
				title: 'Imatapash mi',
				image: firstImage,
				text: `
					Pipash kikinta manllachikpi mana  kashpaka nimanta llakichikrikukpika mana llakichichu munamichu ni, karuyay ni, mana kashpaka imashpatak katiriyanki ni.
					<br /> 
					Ña kikinpa yuyayta uyachishpaka, mana ña paywanka rimakuychu, chay pachapika mana imatapash yuyaywan hapinkachu.
					<br />
					<span class="primary-color">Kishpirishka kay</span>
				`
			},
			{
				title: 'Yanapayta maskay',
				image: secondImage,
				text: `
					<span class="primary-color">
						Maykan kimiriya kakta yanapaway ni.
					</span>
					<br />
					Muyunti tawka runakunapapi kakpipash, kaypunaka mana rikushka kakpika utsikalla willay chay mana alli runa ima nishkatapash, ima rurashkatapash. Willay ima shina churakushkakakta ña hapitukushpa kachun.
					<br />
					Kanwan kachun nishpa mañaylla, mana kashpaka chapak runakunata kayachipaychik nina kanki.`
			},
			{
				title: 'Kuyurik-shuyuy',
				image: firstImage,
				text: `
					Kishpirishka kashpaka utsikalla kikinpa willi-williwan shuyupay ima paktarikukta, mana kashpaka maykan kimiriyakta  rurapay ni.
					<br />
					Yuyaywan kay alli shuyukuna shukshikun, maypi kak pi manllachikukpash alli rikurichun.  Tapuy imashimi chay shuyushkakunawan denunciata ushankimi.`
			}
		]
	};

	return (
		<VerticalSlider ref={childRef}>
			<Container backgroundColor="white">
				<Grid className={classes.root} container>
					<Grid item xs={0} sm={3}></Grid>
					<Grid item xs={12} sm={6}>
						<Box height={0.2} width={1}>
							<Grid
								className={classes.headerContainer}
								container
								direction="row"
								justify="space-between"
							>
								<Grid item xs={12}>
									<Typography
										className={classes.title}
										variant="h5"
										style={{fontSize: '1.3rem', lineHeight: 1.2}}
									>
										{language === 'es'
											? parse('Si no te hace bien <br /> ¡Reacciona!')
											: parse('Kanta mana alliyachikpika <br /> ¡Rikchariy!')}
									</Typography>
								</Grid>
								<Grid xs={12} item>
									<Typography
										className={classes.subtitle}
										variant="body1"
										style={{fontSize: '0.8rem'}}
									>
										{language === 'es'
											? parse(
													'En caso de algun tipo de violencia esto <br /> es lo que puedes hacer'
											  )
											: parse('Ima llakichikuna tiyakpipash kay <br /> ruraykunata paktachiy')}
									</Typography>
								</Grid>
							</Grid>
						</Box>
						<Content
							onNext={onNext}
							bodyHeight={0.7}
							imageHeight={0.35}
							imageWidth={0.75}
							info={data[language][0]}
						/>
					</Grid>
				</Grid>
			</Container>
			<Container backgroundColor="white">
				<Grid className={classes.root} container>
					<Grid item xs={0} sm={3}></Grid>
					<Grid item xs={12} sm={6}>
						<Content
							onNext={onNext}
							bodyHeight={0.9}
							imageHeight={0.3}
							imageWidth={0.85}
							inverted
							fullHeight
							info={data[language][1]}
						/>
					</Grid>
				</Grid>
			</Container>
			<Container backgroundColor="white">
				<Grid className={classes.root} container>
					<Grid item xs={0} sm={3}></Grid>
					<Grid item xs={12} sm={6}>
						<Content
							onNext={onNext}
							bodyHeight={0.9}
							imageHeight={0.3}
							imageWidth={0.85}
							isLast
							fullHeight
							info={data[language][2]}
						/>
					</Grid>
				</Grid>
			</Container>
		</VerticalSlider>
	);
};

export default VictimAction;
