import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCRl0J6FOUJEOphf3sOiD22yHYDxkJ1QKo',
  authDomain: 'foodbank-c9a2f.firebaseapp.com',
  projectId: 'foodbank-c9a2f',
  storageBucket: 'foodbank-c9a2f.appspot.com',
  messagingSenderId: '555238684160',
  appId: '1:555238684160:web:f8a2b5d94fc398d7564ae5'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
