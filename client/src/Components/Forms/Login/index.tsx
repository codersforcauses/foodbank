import React from 'react'
import { Form, Formik } from 'formik'
import Input from 'Components/Input/TextField'
import Button from 'Components/Button'
import { Link } from 'react-router-dom'

import * as Yup from 'yup'

interface LoginFormValues {
  username: string
  year: number
}

export interface LoginFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: LoginFormValues) => void
}

const currentYear = new Date().getFullYear()

const LoginSchema = Yup.object().shape({
  username: Yup.string().trim().required('Required'),
  year: Yup.number()
    .max(currentYear - 5, `Please enter a year before ${currentYear - 5}`)
    .typeError('Year must be a number')
    .required('Required')
})

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  return (
    <div className='my-8'>
      <Formik
        initialValues={{ username: '', year: 2000 }}
        onSubmit={onSubmit}
        validationSchema={LoginSchema}
      >
        <Form>
          <div className='bg-white p-3 sm:w-96 rounded-xl flex flex-col space-y-6'>
            <h1 className='text-3xl'>Login</h1>
            <Input label='Username' name='username' />
            <Input label='Year of Birth' name='year' />
            <Button type='submit'>Submit</Button>
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
