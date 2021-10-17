import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDC3z6Y9h3xyoYFENIUSCFPID9-19pKrZ0",
    authDomain: "linkedin-clone-60315.firebaseapp.com",
    projectId: "linkedin-clone-60315",
    storageBucket: "linkedin-clone-60315.appspot.com",
    messagingSenderId: "1098781025781",
    appId: "1:1098781025781:web:12235e4a04096f20eb6cbc",
    measurementId: "G-1QK9G66QL9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }