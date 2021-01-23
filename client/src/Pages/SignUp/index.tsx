import React from 'react'
import SignupForm from 'Components/Forms/Signup'

const SignUp: React.FC = () => {
  return (
    <div className='bg-blue flex justify-center'>
      <SignupForm onSubmit={values => console.log(values)} />
    </div>
  )
}

export default SignUp
