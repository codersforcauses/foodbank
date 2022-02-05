import { RegisterOptions } from 'react-hook-form'

import { LoginFormValues } from './index'

const validationSchema: Record<LoginFormValues, RegisterOptions> = {
  username: {
    required: 'Please enter your name or a username',
    pattern: {
      value: /^[a-z0-9]+$/i,
      message: 'Alphanumeric characters only'
    },
    minLength: {
      value: 3,
      message: 'Must be more than 3 characters long'
    }
    // onChange: handleUsernameChange
  }
}

export default validationSchema
