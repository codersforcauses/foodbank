import React from 'react'
import LoginForm from 'Components/Forms/Login'
import "./index.css"

const Login: React.FC = () => {
  return (
    <div className='user-form-page flex justify-center'>
      <LoginForm onSubmit={values => console.log(values)} />
    </div>
  )
}

export default Login
