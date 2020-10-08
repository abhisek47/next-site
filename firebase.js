import firebase from 'firebase';

// Your web app's Firebase configuration
const config = firebase.initializeApp({
  apiKey: 'AIzaSyDx4r7tr1SZYR3LwrX8zCzXtpOvKZbG1wI',
  authDomain: 'clientfiling-login-data.firebaseapp.com',
  databaseURL: 'https://clientfiling-login-data.firebaseio.com',
  projectId: 'clientfiling-login-data',
  storageBucket: 'clientfiling-login-data.appspot.com',
  messagingSenderId: '288078851297',
  appId: '1:288078851297:web:841c1f9df70b4865a39ba0',
  measurementId: 'G-VXEM812JQ8',
});

const db = config.firestore();

export default db;

firebase.analytics();
