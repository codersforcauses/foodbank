import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import LoginForm from '.'
import { LoginFormProps } from '.'

export default {
  title: 'Components/LoginForm',
  component: LoginForm
} as Meta

const Template: Story<LoginFormProps> = args => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = {
  onSubmit: values => console.log(values)
}
