import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAleAg5zURbzzGFyM_rPh0zNUPG4AsEt_0",
  authDomain: "burgeoncarebackup.firebaseapp.com",
  databaseURL: "https://burgeoncarebackup.firebaseio.com",
  projectId: "burgeoncarebackup",
  storageBucket: "burgeoncarebackup.appspot.com",
  messagingSenderId: "1051008715582",
  appId: "1:1051008715582:web:02893d280274961308ba6f",
  measurementId: "G-FQRNS7TW4S"

};

firebase.initializeApp(config)

firebase.firestore().settings(settings)

export default firebase