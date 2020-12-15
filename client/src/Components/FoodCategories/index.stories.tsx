import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { FoodCategories, FoodCategoriesProps } from '.'

export default {
  title: 'FoodCategories',
  component: FoodCategories,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<FoodCategoriesProps> = args => <FoodCategories {...args} />

export const Primary = Template.bind({})
Primary.args = {
    word: "Test"
}


