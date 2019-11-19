import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCT3PGP00vBqc2onKlnGobClNYloJpTKcg',
  authDomain: 'react-ecommerce-57ddf.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-57ddf.firebaseio.com',
  projectId: 'react-ecommerce-57ddf',
  storageBucket: 'react-ecommerce-57ddf.appspot.com',
  messagingSenderId: '450413241265',
  appId: '1:450413241265:web:2a922f6f38ff8240011390',
  measurementId: 'G-HV74SLZHSV',
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
