import React, { useEffect, useState } from 'react'

import firebase from 'firebase/app'
import { auth } from '../firebase'

export interface IAuthContext {
  currentUser: firebase.User | null
  logout: () => Promise<void>
}

export const AuthContext = React.createContext<Partial<IAuthContext>>({})

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState(true)

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
    logout: logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
