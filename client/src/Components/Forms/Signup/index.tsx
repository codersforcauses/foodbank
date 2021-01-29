import React from 'react'
import Input from 'Components/Input/TextField'
import Button from 'Components/Button'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'

import * as Yup from 'yup'

export interface SignupFormValues {
  username: string
  year: number
}

const currentYear = new Date().getFullYear()

const SignupSchema = Yup.object().shape({
  username: Yup.string().trim().required('Required'),
  year: Yup.number()
    .max(currentYear - 5, `Please enter a year before ${currentYear - 5}`)
    .typeError('Year must be a number')
    .required('Required')
})

export const SignupForm: React.FC = () => {
  const handleSubmit = (values: SignupFormValues) => {
    console.log(values)
  }

  return (
    <div className='my-8'>
      <Formik
        initialValues={{ username: '', year: 2000 }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        <Form>
          <div className='bg-white p-3 sm:w-96 rounded-xl flex flex-col space-y-6'>
            <h1 className='text-3xl'>Sign Up</h1>
            <Input label='Username' name='username' />
            <Input label='Year of Birth' name='year' />
            <Button type='submit'>Submit</Button>
            <div className='flex justify-center'>
              <Link to='/login' className='ml-2'>
                Already have an account?
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default SignupForm
