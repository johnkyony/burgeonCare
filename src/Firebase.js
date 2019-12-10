import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDOJosGBTfYWr5dtQIDufDqbmcOLeYFvfg",
  authDomain: "burgean-care.firebaseapp.com",
  databaseURL: "https://burgean-care.firebaseio.com",
  projectId: "burgean-care",
  storageBucket: "burgean-care.appspot.com",
  messagingSenderId: "254371107667",
  appId: "1:254371107667:web:dc51d4ff5d81da847587a6",
  measurementId: "G-274D4K1NDC"
};

firebase.initializeApp(config)

firebase.firestore().settings(settings)

export default firebase