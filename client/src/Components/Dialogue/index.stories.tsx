import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Dialogue, DialogueProps } from '.'

const meta: Meta = {
  title: 'Components/Dialogue',
  component: Dialogue
}

const Template: Story<DialogueProps> = args => {
  return (
    <div className='bg-primary'>
      <Dialogue {...args} />{' '}
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export default meta
