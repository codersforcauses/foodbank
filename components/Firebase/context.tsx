import { createContext, useContext, PropsWithChildren } from 'react'
import { User, Auth } from 'firebase/auth'
import { Firestore } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument } from 'react-firebase-hooks/firestore'
import { app, auth, db } from '@components/Firebase'

interface FirebaseContextProps {
  auth: Auth
  db: Firestore
  user?: User | null | undefined
  userLoading?: boolean
  userError?: Error | undefined
}

const FirebaseContext = createContext<FirebaseContextProps>({
  auth: auth,
  db: db
})
const useFirebase = () => useContext(FirebaseContext)

const FirebaseProvider = ({ children }: PropsWithChildren<{}>) => {
  // User Authentication
  const [user, userLoading, userError] = useAuthState(auth)

  const value: FirebaseContextProps = {
    auth: auth,
    db: db,
    user: user,
    userLoading: userLoading,
    userError: userError
  }

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { useFirebase, FirebaseProvider }
