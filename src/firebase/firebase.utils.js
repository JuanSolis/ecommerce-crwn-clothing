import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBM3a-El_fzIC-10JioO4wqLEUxye3BbvA",
    authDomain: "crwn-db-c82fe.firebaseapp.com",
    databaseURL: "https://crwn-db-c82fe.firebaseio.com",
    projectId: "crwn-db-c82fe",
    storageBucket: "crwn-db-c82fe.appspot.com",
    messagingSenderId: "671269281100",
    appId: "1:671269281100:web:4fcdeae5c5b8032405c3e9",
    measurementId: "G-308FT4J61K"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;