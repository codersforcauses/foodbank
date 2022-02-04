import { SetStateAction } from 'react'
import { FirebaseError } from '@firebase/util'
import {
  Auth,
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { FirestoreError } from 'firebase/firestore'

import { EMAIL_DOMAIN, MESSAGES } from './enums'

const SIGNED_IN = true

const sleep = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const checkUsername = async (
  auth: Auth,
  username: string,
  setRegistered: (value: SetStateAction<boolean>) => void
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
        //#region  //*=========== For logging ===========
        default:
          console.error(err.message)
      }
    } else console.error(err)
    //#endregion  //*======== For logging ===========
  }
}

const signIn = async (
  auth: Auth,
  username: string,
  password: string,
  setError: (value: SetStateAction<string>) => void,
  setGridDisabled?: (value: SetStateAction<boolean>) => void
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
        //#region  //*=========== For logging ===========
        default:
          console.error(err.message)
        //#endregion  //*======== For logging ===========
      }
      setGridDisabled?.(false)
    } else if (err instanceof FirestoreError) {
      //#region  //*=========== For logging ===========
      switch (err.code) {
        default:
          console.error(err.message)
      }
    } else console.error(err)
    //#endregion  //*======== For logging ===========
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
        //#region  //*=========== For logging ===========
        default:
          console.error(err.message)
      }
    } else console.error(err)
    //#endregion  //*======== For logging ===========
  }
}

export { checkUsername, signIn, signUp, sleep }
