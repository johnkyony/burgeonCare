const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin')

admin.initializeApp()

const db = admin.firestore()

exports.AddUserRole = functions.auth.user().onCreate(async (authUser) => {
  if(authUser.email){
    const customClaims = {
      admin: true
    }
    try {
      const _ = await admin.auth().setCustomUserClaims(authUser.uid , customClaims)
      return db.collection("roles").doc(authUser.uid).set({
        email: authUser.email , 
        role: customClaims
      })
    }catch(error) {
      console.log(error)
    }
  }
})