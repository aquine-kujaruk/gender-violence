import React, {useState, useCallback} from 'react';
import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Grid,
	makeStyles,
	Typography
} from '@material-ui/core';
import ButtonCustom from '../components/ButtonCustom';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import ContainerRounded from './../components/ContainerRounded';
import longArrow from '../assets/long-arrow.png';
import {setSelected} from '../duck';
import {useSelector} from 'react-redux';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%',
		padding: '8%',
		borderRadius: 24
	},
	text: {
		fontWeight: 'bold',
		color: theme.palette.primary.main
	},
	textBody: {
		paddingTop: 8,
		color: theme.palette.primary.main
	},
	checkboxLabel: {
		backgroundColor: 'white',
		borderRadius: 24,
		border: `1px solid ${theme.palette.primary.main}`,
		margin: '4px 0',
		'&.checked': {
			backgroundColor: theme.palette.primary.main
		}
	},
	checkboxText: {
		fontWeight: 'bold',
		color: theme.palette.primary.main,
		'&.checked': {
			color: 'white'
		}
	},
	checkbox: {
		height: 16,
		color: theme.palette.primary.main,
		'&.Mui-checked': {
			color: 'white'
		}
	},
	buttonImageIcon: {
		width: '2.5rem',
		height: '1.5rem',
		transform: 'scaleY(0.6)',
		paddingLeft: 4
	}
}));

const data = {
	es: {
		title: '¿Cuál es tu caso?',
		subtitle: 'Selecciona todas las opciones con las que te sientas identificado',
		checkboxes: [
			'Tuve miedo a empeorar las cosas',
			'Me pareció que no era mi problema',
			'Pensé que no cambiaría gran cosa',
			'Nadie hizo nada',
			'Sentí que era un tema cultural',
			'No supe que hacer',
			'Logré parar la agresión'
		]
	},
	ki: {
		title: '¿Maykanta kan kikin kawsashka?',
		subtitle: '',
		checkboxes: [
			'Ashtawan llakichinata manllanayarka',
			'Mana ñukapa phiñariy karkachu',
			'Mana alliyachishachuta yuyaykani',
			'Pipash mana imatapash rurarka',
			'Paypa kawsaymanta phiñariy yuyaykani',
			'Mana imatapash shinayta usharkani',
			'Makanakuyta harkarkani'
		]
	}
};

const StopAbuseCases = () => {
	const classes = useStyle();
	const dispatch = useDispatch();
	const {language} = useSelector((state) => state.data);

	const [checked, setChecked] = useState([]);

	const history = useHistory();
	const onNext = useCallback(() => history.push('/detenlo/siguiente'), [history]);

	const handleChange = (index) => {
		if (checked.includes(index)) setChecked(checked.filter((item) => item !== index));
		else setChecked([...checked, index]);
	};

	const handleNext = () => {
		dispatch(setSelected(checked));
		onNext();
	};

	return (
		<ContainerRounded>
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h5">
						{data[language].title}
						<Typography className={classes.textBody} variant="subtitle2">
							{data[language].subtitle}
						</Typography>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Box display="flex" justifyContent="center" alignItems="center">
						<FormControl fullWidth component="fieldset" className={classes.formControl}>
							<FormGroup>
								{data[language].checkboxes.map((item, index) => {
									return (
										<FormControlLabel
											key={index}
											onChange={() => handleChange(index)}
											className={`${classes.checkboxLabel} ${checked.includes(index) && 'checked'}`}
											control={
												<Checkbox
													checked={checked.includes(index)}
													onChange={() => handleChange(index)}
													className={classes.checkbox}
												/>
											}
											label={
												<Typography
													className={`${classes.checkboxText} ${
														checked.includes(index) && 'checked'
													}`}
													variant="body2"
												>
													{item}
												</Typography>
											}
										/>
									);
								})}
							</FormGroup>
						</FormControl>
					</Box>
				</Grid>
				<Grid xs={12} item>
					<Box height={1} width={1} display="flex" justifyContent="center" alignItems="center">
						<ButtonCustom
							style={{borderColor: 'white'}}
							variant="outlined"
							type="outlined"
							onClick={handleNext}
						>
							<img alt="" className={classes.buttonImageIcon} src={longArrow} />
						</ButtonCustom>
					</Box>
				</Grid>
			</Grid>
		</ContainerRounded>
	);
};

export default StopAbuseCases;
