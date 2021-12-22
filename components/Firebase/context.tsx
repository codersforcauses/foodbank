import {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
  PropsWithChildren
} from 'react'
import { User, Auth, signOut } from 'firebase/auth'
import {
  doc,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
  FirestoreError
} from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
// import * as FireStoreParser from 'firestore-parser'
const FireStoreParser = require('firestore-parser')
import { useFetch } from 'use-http'
import { auth, db } from '@components/Firebase'
import { MESSAGES } from '@components/Auth/enums'

const FIRESTORE_URL =
  'https://firestore.googleapis.com/v1/projects/foodbank-c9a2f/databases/(default)/documents/users'
interface FirebaseContextProps {
  auth: Auth
  db: Firestore
  user?: User | null | undefined
  userLoading?: boolean
  userError?: Error | undefined
  achievements: AchievementsData
  updateAchievementsDocument?: (
    newAchievements: Partial<AchievementsData>
  ) => void
  signOutClearData?: () => void
}

interface AchievementsData {
  achievement1: boolean
  achievement2: boolean
  achievement3: boolean
  achievement4: boolean
  achievement5: boolean
  achievement6: boolean
  achievement7: boolean
  achievement8: boolean
  achievement9: boolean
}

const defaultAchievements: AchievementsData = {
  achievement1: false,
  achievement2: false,
  achievement3: false,
  achievement4: false,
  achievement5: false,
  achievement6: false,
  achievement7: false,
  achievement8: false,
  achievement9: false
}

const FirebaseContext = createContext<FirebaseContextProps>({
  auth: auth,
  db: db,
  achievements: defaultAchievements
})
const useFirebase = () => useContext(FirebaseContext)

const FirebaseProvider = ({ children }: PropsWithChildren<{}>) => {
  const [achievements, setAchievements] =
    useState<AchievementsData>(defaultAchievements)

  // User Authentication
  const [user, userLoading, userError] = useAuthState(auth)
  // const { get, response, error } = useFetch(FIRESTORE_URL)

  const retrieveData = useCallback(async () => {
    if (user?.uid) {
      try {
        console.log('Retrieving data')
        const userToken = await user.getIdToken()
        const headers = { Authorization: `Bearer ${userToken}` }
        console.log(userToken)
        const response = await fetch(`${FIRESTORE_URL}/${user.uid}`, {
          method: 'get',
          headers: headers
        })
        console.log(response)
        const userDoc = await response.json()
        // const userDoc = await get(`/${user.uid}`)
        if (response.ok && userDoc?.fields) {
          const userDocData = FireStoreParser(userDoc.fields)
          console.log(userDocData)
          setAchievements(userDocData)
        } else {
          // doc.data() will be undefined in this case
          console.error(MESSAGES.NO_USER_DOCUMENT)
          await setDoc(doc(db, 'users', user.uid), defaultAchievements)
        }
      } catch (err: unknown) {
        if (err instanceof FirestoreError) {
          switch (err.code) {
            default:
              console.error(err.message)
          }
        } else console.error(err)
      }
    }
  }, [user])

  useEffect(() => {
    retrieveData()
  }, [retrieveData])

  const updateAchievementsDocument = async (
    newAchievements: Partial<AchievementsData>
  ) => {
    setAchievements(prev => ({ ...prev, ...newAchievements }))
    try {
      if (user?.uid) {
        const userDocRef = doc(db, 'users', user.uid)
        await updateDoc(userDocRef, newAchievements)
      }
    } catch (err: unknown) {
      if (err instanceof FirestoreError) {
        switch (err.code) {
          default:
            console.error(err.message)
        }
      } else console.error(err)
    }
  }

  const signOutClearData = () => {
    signOut(auth)
    setAchievements(defaultAchievements)
  }

  const value: FirebaseContextProps = {
    auth: auth,
    db: db,
    user: user,
    userLoading: userLoading,
    userError: userError,
    achievements: achievements,
    updateAchievementsDocument: updateAchievementsDocument,
    signOutClearData: signOutClearData
  }

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { useFirebase, FirebaseProvider, defaultAchievements }
export type { AchievementsData }
