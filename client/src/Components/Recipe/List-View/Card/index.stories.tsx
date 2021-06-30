import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Card, CardProps } from './index'

export default {
  title: 'Component/Recipe/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<CardProps> = args => <Card {...args} />

export const Unlocked = Template.bind({})
Unlocked.args = {
  unlocked: true,
  label: 'Recipe Name',
  image: "cheeky-chicken-bites.jpg",
  text: 'Image Alt Text',
  color: 'Primary'
}
