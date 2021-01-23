import React from 'react'
import LoginForm from 'Components/Forms/Login'

const Login: React.FC = () => {
  return (
    <div className='flex justify-center bg-blue'>
      <LoginForm onSubmit={values => console.log(values)} />
    </div>
  )
}

export default Login
