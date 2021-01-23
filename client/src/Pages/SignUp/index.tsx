import React from 'react'
import SignupForm from 'Components/Forms/Login'
import './index.css'
import {Link} from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <div className='user-form-page flex justify-center'>
      <SignupForm
        onSubmit={values => console.log(values)}
      />
    </div>
  )
}

export default SignUp
