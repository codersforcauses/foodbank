import { Dispatch, SetStateAction } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
  EmailAuthProvider,
  AuthErrorCodes,
  Auth
} from 'firebase/auth'
import { FirestoreError } from 'firebase/firestore'
import { FirebaseError } from '@firebase/util'
import { MESSAGES, EMAIL_DOMAIN, FirestoreErrorCodes } from './enums'

const SIGNED_IN = true

const sleep = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const checkUsername = async (
  auth: Auth,
  username: string,
  setRegistered: Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const signInMethods = await fetchSignInMethodsForEmail(
      auth,
      `${username.toLowerCase()}@${EMAIL_DOMAIN}`
    )
    // User can sign in with email/password.
    signInMethods.indexOf(EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) !==
    -1
      ? setRegistered(true)
      : setRegistered(false)
  } catch (err: unknown) {
    if (err instanceof FirebaseError) {
      switch (err.code) {
        case AuthErrorCodes.QUOTA_EXCEEDED:
          break
        default:
          console.error(err.message)
      }
    } else console.error(err)
  }
}

const signIn = async (
  auth: Auth,
  username: string,
  password: string,
  setError: (value: SetStateAction<string>) => void,
  setGridDisabled: (value: SetStateAction<boolean>) => void
) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      `${username}@${EMAIL_DOMAIN}`,
      password
    ) //<-- SIGNIN
    setError('')
    return SIGNED_IN
  } catch (err: unknown) {
    if (err instanceof FirebaseError) {
      switch (err.code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          setError(MESSAGES.WRONG_PASSWORD)
          break
        case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
          setError(MESSAGES.TOO_MANY_ATTEMPTS)
          break
        default:
          console.error(err.message)
      }
      setGridDisabled(false)
    } else if (err instanceof FirestoreError) {
      switch (err.code) {
        default:
          console.error(err.message)
      }
    } else console.error(err)
    return !SIGNED_IN
  }
}

const signUp = async (auth: Auth, username: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      `${username}@${EMAIL_DOMAIN}`,
      password
    )
    if (auth?.currentUser?.uid) {
      await updateProfile(auth.currentUser, {
        displayName: username
      })
    }
  } catch (err: unknown) {
    if (err instanceof FirebaseError) {
      switch (err.code) {
        default:
          console.error(err.message)
      }
    } else console.error(err)
  }
}

export { sleep, checkUsername, signIn, signUp }
