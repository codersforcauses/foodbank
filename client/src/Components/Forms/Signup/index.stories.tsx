import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import SignupForm from '.'

export default {
  title: 'Components/SignupForm',
  component: SignupForm
} as Meta

const Template: Story = args => <SignupForm {...args} />

export const Default = Template.bind({})
