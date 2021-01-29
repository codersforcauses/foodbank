import { auth } from '../firebase'
import React, { useContext, useEffect, useState } from 'react'
import firebase from 'firebase/app'
import { SignupFormValues } from 'Components/Forms/Signup'

interface IAuthContext {
  currentUser: firebase.User | null
  signup?: (values: SignupFormValues) => Promise<firebase.auth.UserCredential>
}

const AuthContext: React.Context<IAuthContext> = React.createContext<
  IAuthContext
>({
  currentUser: null
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

  const signup = (values: SignupFormValues) => {
    return auth.createUserWithEmailAndPassword(
      values.username,
      values.year.toString()
    )
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user: firebase.User | null) => {
        setCurrentUser(user)
      }
    )

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
