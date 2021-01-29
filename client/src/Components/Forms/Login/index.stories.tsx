import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import LoginForm from '.'

export default {
  title: 'Components/LoginForm',
  component: LoginForm
} as Meta

const Template: Story = args => <LoginForm {...args} />

export const Default = Template.bind({})
