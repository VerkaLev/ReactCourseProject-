import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDe1nyK1aSbwAr-fkMPj9svOXUYnkQ_VAA',
  authDomain: 'ts-final-work.firebaseapp.com',
  projectId: 'ts-final-work',
  storageBucket: 'ts-final-work.appspot.com',
  messagingSenderId: '295669185230',
  appId: '1:295669185230:web:3a1653f54d10233d766e9f',
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database;
export const auth = firebase.auth();
export default firebase;
