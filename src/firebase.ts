import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

export const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDCcQTra8b-mAGA_RABCi9b5XuZ6BfUnAg',
	authDomain: 'firesten-app.firebaseapp.com',
	databaseURL: 'https://firesten-app.firebaseio.com',
	projectId: 'firesten-app',
	storageBucket: 'firesten-app.appspot.com',
	messagingSenderId: '569941474931'
});

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
export const storage = firebaseApp.storage();
export const functions = firebaseApp.functions('europe-west1');
