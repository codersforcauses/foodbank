import React from 'react'
import { Story, Meta } from '@storybook/react'

import UserForm, { UserProps } from '.'

export default {
  title: 'Components/Forms',
  component: UserForm
} as Meta

const Template: Story<UserProps> = args => {
  return <UserForm {...args} />
}

export const LoginForm = Template.bind({})
LoginForm.args = {
  title: 'Login',
  onSubmit: values => {
    console.log(values)
  }
}

export const SignUpForm = Template.bind({})
SignUpForm.args = {
  title: 'Sign Up',
  onSubmit: values => {
    console.log(values)
  }
}
