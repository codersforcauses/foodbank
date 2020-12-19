import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './index'

export default {
  title: 'Components/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  backgroundColour: 'primary',
  textColour: 'white',
  label: 'Button'
}

export const Orange = Template.bind({})
Orange.args = {
  backgroundColour: 'orange',
  textColour: 'black',
  label: 'Button'
}

export const Blue = Template.bind({})
Blue.args = {
  backgroundColour: 'blue',
  textColour: 'black',
  label: 'Button'
}

export const Teal = Template.bind({})
Teal.args = {
  backgroundColour: 'teal',
  textColour: 'black',
  label: 'Button'
}
