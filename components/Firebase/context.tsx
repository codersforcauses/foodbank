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
  setDoc,
  updateDoc,
  FirestoreError
} from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import FireStoreParser from 'firestore-parser'
import { auth, db } from '@components/Firebase'
import { MESSAGES } from '@components/Auth/enums'

const NUMBER_OF_ACHIEVEMENTS = 9

const FIRESTORE_URL =
  'https://firestore.googleapis.com/v1/projects/foodbank-c9a2f/databases/(default)/documents/users'

interface FirebaseContextProps {
  auth: Auth
  db: Firestore
  user?: User | null | undefined
  userLoading?: boolean
  userError?: Error | undefined
  achievements: AchievementsData
  updateAchievementsDocument?: (newAchievements: AchievementsData) => void
  signOutClearData?: () => void
}

interface AchievementsData {
  [achievementName: string]: boolean
}
const defaultAchievements: AchievementsData = {}
for (let i = 1; i <= NUMBER_OF_ACHIEVEMENTS; i++) {
  defaultAchievements[`achievement${i}`] = false
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

  const retrieveData = useCallback(async () => {
    if (user?.uid) {
      try {
        const userToken = await user.getIdToken()
        const headers = { Authorization: `Bearer ${userToken}` }
        const response = await fetch(`${FIRESTORE_URL}/${user.uid}`, {
          method: 'get',
          headers: headers
        })
        const userDoc = await response.json()
        if (response.ok && userDoc?.fields) {
          const userDocData: AchievementsData = FireStoreParser(userDoc.fields)
          setAchievements(userDocData)
        } else {
          // doc.data() will be undefined in this case
          console.error(MESSAGES.NO_USER_DOCUMENT)
          await setDoc(doc(db, 'users', user.uid), defaultAchievements)
        }
      } catch (err: unknown) {
        //#region  //*=========== For logging ===========
        if (err instanceof FirestoreError) {
          switch (err.code) {
            default:
              console.error(err.message)
          }
        } else console.error(err)
        //#endregion  //*======== For logging ===========
      }
    }
  }, [user])

  useEffect(() => {
    retrieveData()
  }, [retrieveData])

  const updateAchievementsDocument = async (
    newAchievements: AchievementsData
  ) => {
    setAchievements(prev => ({ ...prev, ...newAchievements }))
    try {
      if (user?.uid) {
        const userDocRef = doc(db, 'users', user.uid)
        await updateDoc(userDocRef, newAchievements)
      }
    } catch (err: unknown) {
      //#region  //*=========== For logging ===========
      if (err instanceof FirestoreError) {
        switch (err.code) {
          default:
            console.error(err.message)
        }
      } else console.error(err)
      //#endregion  //*======== For logging ===========
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
