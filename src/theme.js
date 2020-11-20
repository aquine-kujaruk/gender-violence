import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ff5f2b'
		}
	},
	typography: {
		body2: {
			fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
			fontWeight: 400,
			fontSize: '0.7rem',
			lineHeight: 1.43,
			letterSpacing: '0.01em'
		}
	}
});

export default theme;
