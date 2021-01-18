import React from 'react'
import { UserForm } from 'Components/Forms/User'
import "./index.css"

const SignUp: React.FC = () => {
  return (
    <div className='user-form-page flex justify-center'>
      <UserForm className='user-form' title='Sign Up' onSubmit={values => console.log(values)} />
    </div>
  )
}

export default SignUp
