import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import SignupForm from '.'
import { SignupFormProps } from '.'

export default {
  title: 'Components/SignupForm',
  component: SignupForm
} as Meta

const Template: Story<SignupFormProps> = args => <SignupForm {...args} />

export const Default = Template.bind({})
Default.args = {
  onSubmit: values => console.log(values)
}
