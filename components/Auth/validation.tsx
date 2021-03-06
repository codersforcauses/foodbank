import { RegisterOptions } from 'react-hook-form'
import { LoginFormValues } from './index'

const validationSchema: Record<LoginFormValues, RegisterOptions> = {
  username: {
    required: 'Please enter your name or a username'
  },
  DOB: {
    required: 'Please select your year of birth'
  }
}

export default validationSchema
