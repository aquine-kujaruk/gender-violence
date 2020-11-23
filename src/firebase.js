import * as firebase from 'firebase';
import 'firebase/firestore';

let config = {
	apiKey: 'AIzaSyAzujNJviCR7asyBmV2op58DzXZVK40_3M',
	authDomain: 'gender-violence-ec.firebaseapp.com',
	databaseURL: 'https://gender-violence-ec.firebaseio.com',
	projectId: 'gender-violence-ec',
	storageBucket: 'gender-violence-ec.appspot.com',
	messagingSenderId: '698167853802',
	appId: '1:698167853802:web:7a7dfe3276c75d16e64d93',
	measurementId: 'G-F0HJDP5XY1'
};

firebase.initializeApp(config);

export default firebase.firestore();
