import React from 'react'
import { Form, Formik } from 'formik'
import Input from 'Components/Input/TextField'
import Button from 'Components/Button'
import * as Yup from 'yup'

interface UserFormValues {
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
  onSubmit: (values: UserFormValues) => void
  className?: string
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

export const UserForm: React.FC<UserProps> = ({ title, onSubmit, className }) => {
  return (
    <div className={className}>
      <Formik
        initialValues={{ username: '', year: 2000 }}
        onSubmit={onSubmit}
        validationSchema={SignupSchema}
      >
        <Form>
          <div className='bg-white p-3 sm:w-96 rounded-xl flex flex-col space-y-6'>
            <h2>{title}</h2>
            <Input label='Username' name='username' />
            <Input label='Year of Birth' name='year' />
            <Button type='submit'>Submit</Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default UserForm
