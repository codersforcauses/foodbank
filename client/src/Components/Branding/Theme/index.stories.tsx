import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from 'react'
import Theme from '.'

export default {
  title: 'Branding/Theme',
  component: Theme
} as Meta

const Template: Story = () => <Theme />

export const Swatches = Template.bind({})
