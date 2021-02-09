import React from 'react'
import { Story, Meta } from '@storybook/react'
import Theme from '.'

export default {
  title: 'Branding/Theme',
  component: Theme
} as Meta

const Template: Story = () => <Theme />

export const Swatches = Template.bind({})
