import React from 'react'
import { UserForm } from 'Components/Forms/User'

const Login: React.FC = () => {
  return (
    <div>
      <UserForm title='Login' onSubmit={values => console.log(values)} />
    </div>
  )
}

export default Login
