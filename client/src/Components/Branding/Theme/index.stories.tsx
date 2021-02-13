import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Theme from '.'

export default {
  title: 'Branding/Theme',
  component: Theme
} as Meta

const Template: Story = () => <Theme />

export const Swatches = Template.bind({})
