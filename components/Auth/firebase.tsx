import firebase from '@firebase/app'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCRl0J6FOUJEOphf3sOiD22yHYDxkJ1QKo',
  authDomain: 'foodbank-c9a2f.firebaseapp.com',
  projectId: 'foodbank-c9a2f',
  storageBucket: 'foodbank-c9a2f.appspot.com',
  messagingSenderId: '555238684160',
  appId: '1:555238684160:web:f8a2b5d94fc398d7564ae5'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  console.log('Initialised!')
}

const firestore = firebase.firestore()
export { firestore }
