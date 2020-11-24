import Repository from './repository';

const initialData = {
	count: 0,
	identifier: 0,
	selected: [],
	user: {
		name: '',
		age: '',
		sex: '',
		email: '',
		sector: ''
	},
	language: 'es',
	menuOpen: false,
	loader: false
};

const SET_SELECTED = 'SET_SELECTED';
const GET_COUNT = 'GET_COUNT';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const MENU_OPEN = 'MENU_OPEN';
const SET_LOADER = 'SET_LOADER';

export default function reducer(state = initialData, action) {
	switch (action.type) {
		case CREATE_USER:
			return {...state, identifier: action.payload};
		case GET_COUNT:
			return {...state, count: action.payload};
		case SET_SELECTED:
			return {...state, selected: action.payload};
		case UPDATE_USER:
			return {...state, user: action.payload};
		case CHANGE_LANGUAGE:
			return {...state, language: action.payload};
		case MENU_OPEN:
			return {...state, menuOpen: action.payload};
		case SET_LOADER:
			return {...state, loader: action.payload};
		default:
			return state;
	}
}

export const getCount = () => async (dispatch) => {
	try {
		const count = await Repository.getCount();
		dispatch({
			type: GET_COUNT,
			payload: count
		});
	} catch (error) {
		console.log(error);
	}
};

export const createUser = () => async (dispatch) => {
	try {
		const identifier = await Repository.createUser();
		dispatch({
			type: CREATE_USER,
			payload: identifier
		});
	} catch (error) {
		console.log(error);
	}
};

export const setSelected = (array) => (dispatch) =>
	dispatch({
		type: SET_SELECTED,
		payload: array
	});

export const updateUser = (user) => async (dispatch, getState) => {
	try {
		const data = {
			...user,
			selected: getState().data.selected
		};
		Repository.updateUser(getState().data.identifier, data);
		dispatch({
			type: UPDATE_USER,
			payload: user
		});
	} catch (error) {
		console.log(error);
	}
};

export const setChangeLanguage = (language) => (dispatch) =>
	dispatch({
		type: CHANGE_LANGUAGE,
		payload: language
	});

export const setMenuOpen = (status) => (dispatch) =>
	dispatch({
		type: MENU_OPEN,
		payload: status
	});

export const setLoader = (status) => (dispatch) =>
	dispatch({
		type: SET_LOADER,
		payload: status
	});
