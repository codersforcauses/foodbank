import React from 'react'
import Input from 'Components/Input/TextField'
import Button from 'Components/Button'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'

import * as Yup from 'yup'

interface SignupFormValues {
  username: string
  year: number
}

export interface SignupFormProps {
  onSubmit: (values: SignupFormValues) => void
}

const currentYear = new Date().getFullYear()

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(1, 'Username must be at least 1 character')
    .required('Required'),
  year: Yup.number()
    .max(currentYear - 5, `Please enter a year before ${currentYear - 5}`)
    .typeError('Year must be a number')
    .required('Required')
})

export const SignupForm: React.FC<SignupFormProps> = ({
  onSubmit,
}) => {
  return (
      <Formik
        initialValues={{ username: '', year: 2000 }}
        onSubmit={onSubmit}
        validationSchema={SignupSchema}
      >
        <Form>
          <div className='bg-white p-3 sm:w-96 rounded-xl flex flex-col space-y-6'>
            <h1 className='text-3xl'>Login</h1>
            <Input label='Username' name='username' />
            <Input label='Year of Birth' name='year' />
            <Button type='submit'>Submit</Button>
            <div className='pageStatus flex justify-center'>
              <Link to='/login' className='ml-2'>
                Don&apos;t have an account?
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
  )
}

export default SignupForm
