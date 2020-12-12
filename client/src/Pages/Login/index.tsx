import React from 'react'
import { Button } from 'Components/Button'

const Login: React.FC = () => {
  return (
    <div>
      <div>Are you new?</div>
      <Button label='Sign Up' />
      <div>Returning?</div>
      <Button label='Login' />
    </div>
  )
}

export default Login
