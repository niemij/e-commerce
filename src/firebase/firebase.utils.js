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

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
