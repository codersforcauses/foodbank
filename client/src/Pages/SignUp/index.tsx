import React from 'react'
import { UserForm } from 'Components/Forms/User'

const SignUp: React.FC = () => {
  return (
    <div>
      <UserForm title='Sign Up' onSubmit={values => console.log(values)} />
    </div>
  )
}

export default SignUp
