import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import React, {useState} from 'react';
import ButtonCustom from '../components/ButtonCustom';
import Container from './../components/Container';
import {FacebookShareButton, WhatsappShareButton} from 'react-share';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useSelector} from 'react-redux';
import * as parse from 'html-react-parser';

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100%',
		padding: '8%'
	},
	text: {
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center'
	},
	textBody: {
		fontWeight: '400',
		color: 'white',
		textAlign: 'center'
	},
	buttonText: {
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		'&.copied': {
			color: theme.palette.primary.main
		}
	},
	socialButton: {
		padding: '8px !important',
		margin: '0 8px',
		borderRadius: '50%',
		backgroundColor: 'white !important'
	},
	socialIcon: {
		fontSize: 64,
		backgroundColor: 'transparent'
	}
}));

const Final = () => {
	const classes = useStyle();
	const [copied, setCopied] = useState(false);
	const {language} = useSelector((state) => state.data);

	const data = {
		es: {
			text1: '¡Gracias por estar aquí!',
			text2: parse('¡Compártelo! <br /> Quizá alguien más necesita esta información'),
			textButton: copied ? 'Link copiado' : 'Copiar link'
		},
		ki: {
			text1: '¡Yupaychanchik kaypi kaymanta!',
			text2: parse('¡Purichiy! <br /> Pipash kay willaykunata mutsunakunkami'),
			textButton: copied ? 'Link copiado' : 'Copiar link'
		}
	};

	return (
		<Container>
			<Grid className={classes.root} container direction="row" justify="space-between">
				<Grid item xs={12}>
					<Typography className={classes.text} variant={language === 'es' ? 'h3' : 'h4'}>
						{data[language].text1}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.textBody} variant="h6">
						{data[language].text2}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Box width={1} display="flex" justifyContent="center" alignItems="center">
						<FacebookShareButton
							className={classes.socialButton}
							url={`https://${window.location.hostname}`}
						>
							<FacebookIcon color="primary" className={classes.socialIcon} />
						</FacebookShareButton>
						<WhatsappShareButton
							className={classes.socialButton}
							url={`https://${window.location.hostname}`}
						>
							<WhatsAppIcon color="primary" className={classes.socialIcon} />
						</WhatsappShareButton>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box display="flex" justifyContent="center" px="32px">
						<CopyToClipboard
							text={`https://${window.location.hostname}`}
							onCopy={() => setCopied(true)}
						>
							<ButtonCustom
								fullWidth
								style={
									copied
										? {backgroundColor: 'white', textTransform: 'none'}
										: {borderColor: 'white', textTransform: 'none'}
								}
								variant="outlined"
								type="outlined"
							>
								<Box display="flex" justifyContent="center">
									<Typography
										className={`${classes.buttonText} ${copied && 'copied'}`}
										variant="h6"
									>
										{data[language].textButton}
									</Typography>
								</Box>
							</ButtonCustom>
						</CopyToClipboard>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Final;
