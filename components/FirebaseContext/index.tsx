import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import {
  doc,
  FirestoreError,
  getDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore'

import { MESSAGES } from '@components/Auth/enums'
import { auth, db } from '@components/FirebaseContext/firebase'

import {
  AchievementsCountProp,
  defaultAchievementsCount,
  FirebaseContextProps,
  FirebaseContextProvider
} from '../FirebaseContext/context'

const FirebaseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [achievementsCount, setAchievementsCount] =
    useState<AchievementsCountProp>(defaultAchievementsCount)
  const [gridDisabled, setGridDisabled] = useState(false)

  // User Authentication
  const [user, setUser] = useState<User | null>(null)
  const [userLoading, setUserLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
      setUserLoading(false)
    })
    return unsubscribe
  }, [])

  const retrieveData = useCallback(async () => {
    if (user?.uid) {
      try {
        const userDocSnap = await getDoc(doc(db, 'users', user.uid))
        if (userDocSnap.exists()) {
          const userDocData = userDocSnap.data() as AchievementsCountProp
          setAchievementsCount(userDocData)
        } else {
          // doc.data() will be undefined in this case
          console.log(MESSAGES.NO_USER_DOCUMENT)
          await setDoc(doc(db, 'users', user.uid), defaultAchievementsCount)
        }
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

  const addAchievementsCount = useCallback(
    async (newAchievementsEarned: number) => {
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
    },
    [achievementsCount, user]
  )

  const signOutClearDataUnlockGrid = useCallback(() => {
    signOut(auth)
    setAchievementsCount(defaultAchievementsCount)
    setGridDisabled(false)
  }, [])

  const value: FirebaseContextProps = useMemo(
    () => ({
      auth: auth,
      db: db,
      user: user,
      userLoading: userLoading,
      achievementsCount: achievementsCount,
      addAchievementsCount: addAchievementsCount,
      signOutClearDataUnlockGrid: signOutClearDataUnlockGrid,
      gridDisabled: gridDisabled,
      setGridDisabled: setGridDisabled
    }),
    [
      user,
      userLoading,
      achievementsCount,
      addAchievementsCount,
      signOutClearDataUnlockGrid,
      gridDisabled,
      setGridDisabled
    ]
  )

  return (
    <FirebaseContextProvider value={value}>{children}</FirebaseContextProvider>
  )
}

export { FirebaseProvider }
