// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// import {initializeApp} from 'firebase/app';
// import {getFireStore} from '@firebase/firestore';

import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCBtXWvqFahg3mIQwqCVmUPdBKQPym70BE",
    authDomain: "reelsapp-33997.firebaseapp.com",
    projectId: "reelsapp-33997",
    storageBucket: "reelsapp-33997.appspot.com",
    messagingSenderId: "365313916717",
    appId: "1:365313916717:web:964a59ab5435b3de3d9da4",
    measurementId: "G-GZ0YFTH5DJ"
  };

// const firebaseApp=initializeApp(firebaseConfig);

// export const db=getFireStore(firebaseApp);
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export default db;
