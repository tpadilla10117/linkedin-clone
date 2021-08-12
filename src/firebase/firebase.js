import firebase from 'firebase';

/* Config from firebase project settings: */
    const firebaseConfig = {
        apiKey: "AIzaSyC495BJBJg7X_Ns6h3g9W7hPkUPZgFv1oE",
        authDomain: "linkedin-clone-f2ce1.firebaseapp.com",
        projectId: "linkedin-clone-f2ce1",
        storageBucket: "linkedin-clone-f2ce1.appspot.com",
        messagingSenderId: "604893630753",
        appId: "1:604893630753:web:db778bd34ff2bef51c6e60"
    };

/* This connects our firebase project using the initializeApp() function: */
    const firebaseApp = firebase.initializeApp(firebaseConfig);

/* Connecting the database (firestore) from firebase: */
    const db = firebaseApp.firestore();

/* Connecting the firebase authentication: */
    const auth = firebase.auth();

export { db, auth };