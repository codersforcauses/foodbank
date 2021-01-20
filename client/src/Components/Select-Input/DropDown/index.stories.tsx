import React from 'react'
import { Story, Meta } from '@storybook/react'
import { DropDown, DropDownProps } from '.'

const meta: Meta = {
  title: 'Components/DropDown',
  component: DropDown
}

const Template: Story<DropDownProps> = args => {
  return (
    <div>
      <DropDown {...args} />{' '}
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export default meta
