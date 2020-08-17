import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBO91hAs97b7XyuxICIwwVuErQYvOQlUt0",
    authDomain: "atanu-backend.firebaseapp.com",
    databaseURL: "https://atanu-backend.firebaseio.com",
    projectId: "atanu-backend",
    storageBucket: "atanu-backend.appspot.com",
    messagingSenderId: "732473516387",
    appId: "1:732473516387:web:4300f648d27dab9afcb356"

});

const db = firebaseApp.firestore();

export default db ;

