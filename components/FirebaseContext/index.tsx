import {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
  PropsWithChildren,
  SetStateAction
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
import { auth, db } from 'pages/api/firebase'
import { MESSAGES } from '@components/Auth/enums'

const NUMBER_OF_ACHIEVEMENTS = 9

const FIRESTORE_URL =
  'https://firestore.googleapis.com/v1/projects/foodbank-c9a2f/databases/(default)/documents/users'

interface FirebaseContextProps {
  auth: Auth
  db: Firestore
  user?: User | null
  userLoading?: boolean
  userError?: Error
  achievements: AchievementsData
  updateAchievementsDocument?: (newAchievements: AchievementsData) => void
  signOutClearDataUnlockGrid?: () => void
  gridDisabled?: boolean
  setGridDisabled?: (value: SetStateAction<boolean>) => void
}

export enum ACHIEVEMENT {
  ACHIEVEMENT_COUNT = 'count',
  DRAG_DROP_WIN_COUNT = 'dragDropWinCount'
}

type AchievementsData = Record<string, number>
const defaultAchievements: AchievementsData = {
  [ACHIEVEMENT.ACHIEVEMENT_COUNT]: 0,
  [ACHIEVEMENT.DRAG_DROP_WIN_COUNT]: 0
}
// for (let i = 1; i <= NUMBER_OF_ACHIEVEMENTS; i++) {
//   defaultAchievements[`achievement${i}`] = false
// }

const FirebaseContext = createContext<FirebaseContextProps>({
  auth: auth,
  db: db,
  achievements: defaultAchievements
})
const useFirebase = () => useContext(FirebaseContext)

const FirebaseProvider = ({ children }: PropsWithChildren<{}>) => {
  const [achievements, setAchievements] =
    useState<AchievementsData>(defaultAchievements)
  const [gridDisabled, setGridDisabled] = useState(false)

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
        //#region  //*=========== For next@12.0.9 ===========
        // const userDocSnap = await getDoc(doc(db, 'users', user.uid))
        // if (userDocSnap.exists()) {
        //   const userDocData: AchievementsData = userDocSnap.data()
        //   setAchievements(userDocData)
        // } else {
        //   // doc.data() will be undefined in this case
        //   console.log('TESTING: No such document!')
        //   await setDoc(doc(db, 'users', user.uid), defaultAchievements)
        // }
        //#endregion  //*======== For next@12.0.9 ===========
      } catch (err: unknown) {
        //#region  //*=========== For logging ===========
        if (err instanceof FirestoreError) {
          console.error(err.message)
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
        console.error(err.message)
      } else console.error(err)
      //#endregion  //*======== For logging ===========
    }
  }

  const signOutClearDataUnlockGrid = () => {
    signOut(auth)
    setAchievements(defaultAchievements)
    setGridDisabled(false)
  }

  const value: FirebaseContextProps = {
    auth: auth,
    db: db,
    user: user,
    userLoading: userLoading,
    userError: userError,
    achievements: achievements,
    updateAchievementsDocument: updateAchievementsDocument,
    signOutClearDataUnlockGrid: signOutClearDataUnlockGrid,
    gridDisabled: gridDisabled,
    setGridDisabled: setGridDisabled
  }

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { useFirebase, FirebaseProvider, defaultAchievements }
export type { AchievementsData }
