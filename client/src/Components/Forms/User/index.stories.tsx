import React from 'react'
import { Story, Meta } from '@storybook/react'

import User, { UserProps } from '.'

export default {
  title: 'Components/User',
  component: User
} as Meta

const Template: Story<UserProps> = args => {
  return <User {...args} />
}

export const UserForm = Template.bind({})
UserForm.args = {
    title: 'Login'
}