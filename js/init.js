if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyBaBKm9HYDln4jdmIWvcBq6aH651Cc-P_s",
  "appId": "1:239694851848:web:cf263b3a6a9b1d48",
  "authDomain": "asuka-nakashima.firebaseapp.com",
  "databaseURL": "https://asuka-nakashima.firebaseio.com",
  "messagingSenderId": "239694851848",
  "projectId": "asuka-nakashima",
  "storageBucket": "asuka-nakashima.appspot.com"
});