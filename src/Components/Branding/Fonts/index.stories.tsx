import React from 'react'
import { Story, Meta } from '@storybook/react'
import Fonts, { FontProps } from '.'

export default {
  title: 'Branding/Fonts',
  component: Fonts
} as Meta

const Template: Story<FontProps> = args => <Fonts {...args} />

export const AllFonts = Template.bind({})
AllFonts.args = {
  weight: 'normal',
  size: 6,
  both: true
}
export const Abraham = Template.bind({})
Abraham.args = {
  type: 'Abraham',
  weight: 'normal',
  size: 6
}
export const Bliss = Template.bind({})
Bliss.args = {
  type: 'Bliss',
  weight: 'normal',
  size: 6
}
