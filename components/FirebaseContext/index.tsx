import { useState, useCallback, useEffect, FC, useMemo } from 'react'
import { signOut } from 'firebase/auth'
import { doc, setDoc, updateDoc, FirestoreError } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import FireStoreParser from 'firestore-parser'
import { auth, db } from 'pages/api/firebase'
import { MESSAGES } from '@components/Auth/enums'
import {
  AchievementsCountProp,
  defaultAchievementsCount,
  FirebaseContextProps,
  FirebaseContextProvider
} from '../FirebaseContext/context'

const FIRESTORE_URL =
  'https://firestore.googleapis.com/v1/projects/foodbank-c9a2f/databases/(default)/documents/users'

const FirebaseProvider: FC = ({ children }) => {
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
          const userDocData: AchievementsCountProp = FireStoreParser(
            userDoc.fields
          )
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
        //   setAchievementsCount(userDocData)
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
      userError: userError,
      achievementsCount: achievementsCount,
      addAchievementsCount: addAchievementsCount,
      signOutClearDataUnlockGrid: signOutClearDataUnlockGrid,
      gridDisabled: gridDisabled,
      setGridDisabled: setGridDisabled
    }),
    [
      user,
      userLoading,
      userError,
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
