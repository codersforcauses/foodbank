import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  bgColor: 'bg-primary',
  children: 'Button'
}

export const Orange = Template.bind({})
Orange.args = {
  bgColor: 'bg-orange',
  children: 'Button'
}

export const Blue = Template.bind({})
Blue.args = {
  bgColor: 'bg-blue',
  children: 'Button'
}

export const Teal = Template.bind({})
Teal.args = {
  bgColor: 'bg-teal',
  children: 'Button'
}
