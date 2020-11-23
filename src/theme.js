import {createMuiTheme} from '@material-ui/core/styles';

const ubuntu = "'Ubuntu', sans-serif";
const ptSans = "'PT Sans', sans-serif";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ff5f2b'
		}
	},
	typography: {
		fontFamily: ubuntu,
		allVariants: {
			color: '#606060'
		},
		body1: {
			fontFamily: ptSans
		},
		body2: {
			fontFamily: ptSans,
			fontWeight: 400,
			fontSize: '0.75rem',
			lineHeight: 1.43,
			letterSpacing: '0.01em'
		},
		subtitle2: {
			fontFamily: ptSans
		}
	}
});

export default theme;
