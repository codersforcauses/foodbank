import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  colour: 'primary',
  label: 'Button'
}

export const Orange = Template.bind({})
Orange.args = {
  colour: 'orange',
  label: 'Button'
}

export const Blue = Template.bind({})
Blue.args = {
  colour: 'blue',
  label: 'Button'
}

export const Teal = Template.bind({})
Teal.args = {
  colour: 'teal',
  label: 'Button'
}
