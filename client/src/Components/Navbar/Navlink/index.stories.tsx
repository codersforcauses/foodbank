import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Navlink, NavlinkProps } from '.'

export default {
  title: 'Components/Navlink',
  component: Navlink
} as Meta

const Template: Story<NavlinkProps> = args => <Navlink {...args} />
export const Example = Template.bind({})
Example.args = {
  page: 'Example',
  route: 'Example/route'
}
