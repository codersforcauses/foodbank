import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Townbox, TownboxProps } from '.'

export default {
  title: 'Example/Textbox',
  component: Townbox,
  argTypes: {}
} as Meta

const Template: Story<TownboxProps> = args => {
  return (
    <div className='bg-primary'>

      <Townbox {...args} />{' '}
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
