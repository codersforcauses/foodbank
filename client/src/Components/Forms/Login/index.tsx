import React, { useContext, useState } from 'react'
import { Form, Formik } from 'formik'
import Input from 'Components/Input/TextField'
import Button from 'Components/Button'
import { Link, useHistory } from 'react-router-dom'

import * as Yup from 'yup'
import { AuthContext, IAuthContext } from 'Contexts/AuthContext'

interface LoginFormValues {
  username: string
  year: number
}

const currentYear = new Date().getFullYear()

const LoginSchema = Yup.object().shape({
  username: Yup.string().trim().required('Required'),
  year: Yup.number()
    .max(currentYear - 5, `Please enter a year before ${currentYear - 5}`)
    .typeError('Year must be a number')
    .required('Required')
})

export const LoginForm: React.FC = () => {
  const [error, setError] = useState('')

  const authContext: IAuthContext = useContext(AuthContext)
  const { login } = authContext

  const history = useHistory()

  const handleSubmit = async (values: LoginFormValues) => {
    setError('')
    try {
      await login(
        // Firebase requires a 'email' username and passwords to be at least 6 characters
        `${values.username}@FBSF.com`,
        `${values.year.toString()}FBSF`
      )
      history.push('/')
    } catch (error) {
      console.log(error)
      if (error.code === 'auth/user-not-found') {
        setError('Username cannot be found')
      } else if (error.code === 'auth/wrong-password') {
        setError('Password is incorrect')
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many login attempts, try again later')
      } else setError('Error while logging in')
    }
  }

  // const handleLogout = async () => {
  //   setError('')
  //   try {
  //     await logout()
  //     history.push('/login')
  //   } catch {
  //     setError('Error while logging out')
  //   }
  // }

  return (
    <div className='my-8'>
      <Formik
        initialValues={{ username: '', year: 2000 }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form>
          <div className='bg-white p-3 sm:w-96 rounded-xl flex flex-col space-y-6'>
            <h1 className='text-3xl'>Login</h1>
            <Input label='Username' name='username' />
            <Input label='Year of Birth' name='year' />
            <Button type='submit'>Submit</Button>
            {error && (
              <span className='text-center text-sm text-red mt-1'>{error}</span>
            )}
            <div className='flex justify-center'>
              <Link to='/signup' className='ml-2'>
                Don&apos;t have an account?
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm
