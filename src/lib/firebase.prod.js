import  Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// we need to somehow sedd the database

// we need a config here const  config ={};

const  config ={
    apiKey: "AIzaSyAcVI24_NZjszuWjPuz3nWwzs2BWaoupV8",
    authDomain: "ott-platform-12f86.firebaseapp.com",
    projectId: "ott-platform-12f86",
    storageBucket: "ott-platform-12f86.appspot.com",
    messagingSenderId: "772106310869",
    appId: "1:772106310869:web:4cdf2632b4dee2afd43e5c"
};

const firebase = Firebase.initializeApp(config);



export{firebase};