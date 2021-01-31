import React, { useEffect, useState } from 'react'

import firebase from 'firebase/app'
import { auth } from '../firebase'

export interface IAuthContext {
  currentUser: firebase.User | null
  login: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>
  logout: () => Promise<void>
  signup: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>
}

export const AuthContext: React.Context<IAuthContext> = React.createContext(
  {} as IAuthContext
)

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => auth.signOut()

  useEffect(() => {
    const unsubscribe: firebase.Unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value: IAuthContext = {
    currentUser: currentUser,
    login: login,
    logout: logout,
    signup: signup
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
