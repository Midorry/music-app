// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: 'music-app-5b7ea.firebaseapp.com',
    projectId: 'music-app-5b7ea',
    storageBucket: 'music-app-5b7ea.appspot.com',
    messagingSenderId: '10246091622',
    appId: '1:10246091622:web:3be71f3aac213981de8ea7',
    measurementId: 'G-PSCWHS4QMW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
const analytics = getAnalytics(app);
