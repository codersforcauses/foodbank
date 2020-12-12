import React from 'react'
import { Form, Formik } from 'formik'
import Input from 'Components/Input/TextField'
import {Button} from 'Components/Button'

interface UserForm {
    username: string;
    year: number;
}

export interface UserProps {
  /**
   * Title of the form
   */
  title: string,
    /**
   * Subimt Handler
   */
  onSubmit: (values: UserForm) => void
}


export const User: React.FC<UserProps> = ({ title, onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{ username: '', year: 2010 }}
        initialErrors={{ username: 'Username Required', year: 'Year Required' }}
        onSubmit={onSubmit}
      >
        <Form>
            
          <div className='bg-white p-3 w-96 rounded-xl flex flex-col space-y-6'>
            <h2>{title}</h2>
            <Input label='Username' name='username' />
            <Input label='Year of Birth' name='year' />
            <Button label="Submit" type="submit"/>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default User
