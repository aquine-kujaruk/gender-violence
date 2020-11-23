import {
	Box,
	Grid,
	makeStyles,
	Typography,
	Divider,
	TextField,
	Select,
	MenuItem,
	OutlinedInput
} from '@material-ui/core';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import Container from './../components/Container';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%',
		padding: '16px'
	},
	text: {
		fontWeight: '500',
		color: theme.palette.primary.main,
		textAlign: 'center'
	},
	divider: {
		backgroundColor: theme.palette.primary.main
	},
	notchedOutline: {
		borderWidth: '1px',
		borderColor: theme.palette.primary.main,
		borderRadius: 16,
		margin: '0 8px'
	}
}));

const useOutlinedInputStyles = makeStyles((theme) => ({
	root: {
		'& $notchedOutline': {
			borderColor: theme.palette.primary.main,
			borderRadius: 16,
			margin: '0 8px'
		},
		'&:hover $notchedOutline': {
			borderColor: theme.palette.primary.main,
			borderRadius: 16,
			margin: '0 8px'
		},
		'&$focused $notchedOutline': {
			borderColor: theme.palette.primary.main,
			borderRadius: 16,
			margin: '0 8px'
		}
	},
	focused: {},
	notchedOutline: {}
}));

const Apply = () => {
	const classes = useStyle();
	const outlinedInputClasses = useOutlinedInputStyles();

	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [sex, setSex] = useState('');
	const [email, setEmail] = useState('');
	const [sector, setSector] = useState('');

	const checkEmail = (str) =>
		typeof str === 'string' && /^[\w+\d+._]+\@[\w+\d+_+]+\.[\w+\d+._]{2,8}$/.test(str);

	const disabled =
		name === '' || age === '' || sex === '' || setSex === '' || !checkEmail(email) || sector === '';

	return (
		<Container backgroundColor="white">
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h6">
						Solicita aquí tu certificado de formación
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider className={classes.divider} />
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h6">
						Nombre
					</Typography>
					<TextField
						InputProps={{
							classes: {
								notchedOutline: classes.notchedOutline
							}
						}}
						fullWidth
						variant="outlined"
						value={name}
						onChange={({target: {value}}) => setName(value)}
					/>
				</Grid>
				<Grid item xs={6}>
					<Typography className={classes.text} variant="h6">
						Edad
					</Typography>
					<TextField
						type="number"
						InputProps={{
							classes: {
								notchedOutline: classes.notchedOutline
							}
						}}
						fullWidth
						variant="outlined"
						value={age}
						onChange={({target: {value}}) => setAge(value)}
					/>
				</Grid>
				<Grid item xs={6}>
					<Typography className={classes.text} variant="h6">
						Sexo
					</Typography>
					<Select
						input={<OutlinedInput classes={outlinedInputClasses} />}
						fullWidth
						variant="outlined"
						value={sex}
						onChange={({target: {value}}) => setSex(value)}
					>
						<MenuItem value={'M'}>Hombre</MenuItem>
						<MenuItem value={'F'}>Mujer</MenuItem>
					</Select>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h6">
						Email
					</Typography>
					<TextField
						InputProps={{
							classes: {
								notchedOutline: classes.notchedOutline
							}
						}}
						fullWidth
						variant="outlined"
						value={email}
						onChange={({target: {value}}) => setEmail(value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.text} variant="h6">
						Parroquia
					</Typography>
					<TextField
						InputProps={{
							classes: {
								notchedOutline: classes.notchedOutline
							}
						}}
						fullWidth
						variant="outlined"
						value={sector}
						onChange={({target: {value}}) => setSector(value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<Box display="flex" justifyContent="center" px="32px" py="12px">
						<ButtonCustom
							disabled={disabled}
							fullWidth
							style={{borderRadius: 24}}
							component={Link}
							to={`/certificado/${name}`}
						>
							<Box display="flex" justifyContent="center">
								<Typography
									variant="subtitle1"
									style={{fontWeight: 'bold', color: disabled ? 'inherit' : 'white'}}
								>
									Solicitar certificado
								</Typography>
							</Box>
						</ButtonCustom>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Apply;
