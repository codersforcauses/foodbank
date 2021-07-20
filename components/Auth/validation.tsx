import { RegisterOptions } from 'react-hook-form'
import { LoginFormValues } from './index'

const validationSchema: Record<LoginFormValues, RegisterOptions> = {
  username: {
    required: 'Please enter your name or a username'
  },
  password: {
    required: 'Please pick your 3 of your favorite foods'
  }
}

export default validationSchema
