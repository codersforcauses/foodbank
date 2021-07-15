import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Townbox, TownboxProps } from '.'

const meta: Meta = {
  title: 'Example/Townbox',
  component: Townbox
}

const Template: Story<TownboxProps> = args => {
  return (
    <div className='bg-primary'>
      <Townbox {...args} />{' '}
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export default meta
