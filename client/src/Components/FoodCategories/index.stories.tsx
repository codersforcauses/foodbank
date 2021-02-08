import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { FoodCategories, FoodCategoriesProps } from '.'

export default {
  title: 'FoodCategories',
  component: FoodCategories
} as Meta

const Template: Story<FoodCategoriesProps> = args => (
  <FoodCategories {...args} />
)

export const AllLocked = Template.bind({})
AllLocked.args = {
  isGrainsLocked: true,
  isVegetablesLocked: true,
  isFruitLocked: true,
  isDairyLocked: true,
  isMeatLocked: true
}

export const SomeLocked = Template.bind({})
SomeLocked.args = {
  isGrainsLocked: true,
  isVegetablesLocked: false,
  isFruitLocked: false,
  isDairyLocked: true,
  isMeatLocked: false
}

export const AllUnlocked = Template.bind({})
AllUnlocked.args = {
  isGrainsLocked: false,
  isVegetablesLocked: false,
  isFruitLocked: false,
  isDairyLocked: false,
  isMeatLocked: false
}
