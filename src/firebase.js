import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyA_5IYBzgbsGOe27ovgFVOWf3WAcQLVD60",
    authDomain: "stream-b64bb.firebaseapp.com",
    projectId: "stream-b64bb",
    storageBucket: "stream-b64bb.appspot.com",
    messagingSenderId: "764307601991",
    appId: "1:764307601991:web:b50265c22966bcbb908f62"
};

firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;