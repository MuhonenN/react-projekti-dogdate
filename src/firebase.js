import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVDMHRqVOsFxR9xMNArHG78jhjZGeXFts",
    authDomain: "dogdate-d01bb.firebaseapp.com",
    projectId: "dogdate-d01bb",
    storageBucket: "dogdate-d01bb.appspot.com",
    messagingSenderId: "278427691869",
    appId: "1:278427691869:web:56ffdab577a9214e5b56b4",
    measurementId: "G-K9KD1V31SY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db