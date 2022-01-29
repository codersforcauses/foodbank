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
  achievementsCount: AchievementsCountProp
  addAchievementsCount?: (newAchievementsEarned: number) => void
  signOutClearDataUnlockGrid?: () => void
  gridDisabled?: boolean
  setGridDisabled?: (value: SetStateAction<boolean>) => void
}

interface AchievementsCountProp {
  count: number
}
const defaultAchievementsCount: AchievementsCountProp = { count: 0 }

const FirebaseContext = createContext<FirebaseContextProps>({
  auth: auth,
  db: db,
  achievementsCount: defaultAchievementsCount
})
const useFirebase = () => useContext(FirebaseContext)

const FirebaseProvider = ({ children }: PropsWithChildren<{}>) => {
  const [achievementsCount, setAchievementsCount] =
    useState<AchievementsCountProp>(defaultAchievementsCount)
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
          const userDocData: AchievementsCountProp = {
            count: userDoc.fields.count.integerValue
          }
          setAchievementsCount(userDocData)
        } else {
          // doc.data() will be undefined in this case
          console.error(MESSAGES.NO_USER_DOCUMENT)
          await setDoc(doc(db, 'users', user.uid), defaultAchievementsCount)
        }
        //#region  //*=========== For next@12.0.9 ===========
        // const userDocSnap = await getDoc(doc(db, 'users', user.uid))
        // if (userDocSnap.exists()) {
        //   const userDocData: AchievementsCountProp = userDocSnap.data()
        //   setAchievements(userDocData)
        // } else {
        //   // doc.data() will be undefined in this case
        //   console.log('TESTING: No such document!')
        //   await setDoc(doc(db, 'users', user.uid), defaultAchievementsCount)
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

  const addAchievementsCount = async (newAchievementsEarned: number) => {
    setAchievementsCount(prev => ({
      count: prev.count + newAchievementsEarned
    }))
    try {
      if (user?.uid) {
        const userDocRef = doc(db, 'users', user.uid)
        await updateDoc(userDocRef, {
          count: achievementsCount.count + newAchievementsEarned
        })
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
    setAchievementsCount(defaultAchievementsCount)
    setGridDisabled(false)
  }

  const value: FirebaseContextProps = {
    auth: auth,
    db: db,
    user: user,
    userLoading: userLoading,
    userError: userError,
    achievementsCount: achievementsCount,
    addAchievementsCount: addAchievementsCount,
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

export { useFirebase, FirebaseProvider, defaultAchievementsCount }
export type { AchievementsCountProp }
