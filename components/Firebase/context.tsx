import {
  useState,
  createContext,
  useContext,
  PropsWithChildren,
  Dispatch,
  SetStateAction
} from 'react'
import { User, Auth } from 'firebase/auth'
import { doc, Firestore, updateDoc, FirestoreError } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '@components/Firebase'

interface FirebaseContextProps {
  auth: Auth
  db: Firestore
  user?: User | null | undefined
  userLoading?: boolean
  userError?: Error | undefined
  achievements?: AchievementsData
  setAchievements?: Dispatch<SetStateAction<AchievementsData>>
  updateAchievementsDocument?: (
    newAchievements: Partial<AchievementsData>
  ) => void
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
  db: db
})
const useFirebase = () => useContext(FirebaseContext)

const FirebaseProvider = ({ children }: PropsWithChildren<{}>) => {
  const [achievements, setAchievements] =
    useState<AchievementsData>(defaultAchievements)

  // User Authentication
  const [user, userLoading, userError] = useAuthState(auth)

  const updateAchievementsDocument = async (
    newAchievements: Partial<AchievementsData>
  ) => {
    try {
      if (user?.uid) {
        const userDocRef = doc(db, 'users', user.uid)
        await updateDoc(userDocRef, newAchievements)
        setAchievements(prev => ({ ...prev, ...newAchievements }))
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

  const value: FirebaseContextProps = {
    auth: auth,
    db: db,
    user: user,
    userLoading: userLoading,
    userError: userError,
    achievements: achievements,
    updateAchievementsDocument: updateAchievementsDocument
  }

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { useFirebase, FirebaseProvider, defaultAchievements }
export type { AchievementsData }
