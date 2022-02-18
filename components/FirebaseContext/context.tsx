import { createContext, SetStateAction, useContext } from 'react'
import { Auth, User } from 'firebase/auth'
import { Firestore } from 'firebase/firestore'

import { auth, db } from '@components/FirebaseContext/firebase'

export interface FirebaseContextProps {
  auth: Auth
  db: Firestore
  user?: User | null
  userLoading?: boolean
  achievementsCount: AchievementsCountProp
  addAchievementsCount?: (newAchievementsEarned: number) => void
  signOutClearDataUnlockGrid?: () => void
  gridDisabled?: boolean
  setGridDisabled?: (value: SetStateAction<boolean>) => void
}

export interface AchievementsCountProp {
  count: number
}

export const defaultAchievementsCount: AchievementsCountProp = { count: 0 }

const FirebaseContext = createContext<FirebaseContextProps>({
  auth: auth,
  db: db,
  achievementsCount: defaultAchievementsCount
})

export const FirebaseContextProvider = FirebaseContext.Provider

export const useFirebase = () => useContext(FirebaseContext)
