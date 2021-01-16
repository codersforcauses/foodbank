import React from 'react'
import { Form, Formik } from 'formik'
import Input from 'Components/Input/TextField'
import { Button } from 'Components/Button'
import * as Yup from 'yup'

interface UserForm {
  username: string
  year: number
}

export interface UserProps {
  /**
   * Title of the form
   */
  title: string
  /**
   * Subimt Handler
   */
  onSubmit: (values: UserForm) => void
}

const currentYear = new Date().getFullYear()

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, 'Username must be at least 1 character')
    .required('Required'),
  // add validation to check if username is in db
  year: Yup.number()
    .max(currentYear - 5, `Please enter a year before ${currentYear - 5}`)
    .typeError('Year must be a number')
    .required('Required')
})

export const User: React.FC<UserProps> = ({ title, onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{ username: '', year: 2000 }}
        onSubmit={onSubmit}
        validationSchema={SignupSchema}
      >
        <Form>
          <div className='bg-white p-3 w-96 rounded-xl flex flex-col space-y-6'>
            <h2>{title}</h2>
            <Input label='Username' name='username' />
            <Input label='Year of Birth' name='year' />
            <Button label='Submit' type='submit' />
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default User
