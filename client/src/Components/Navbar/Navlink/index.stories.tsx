import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Navlink } from '.'
import { RouterElement } from '../../../router'

export default {
  title: 'Components/Navlink',
  component: Navlink
} as Meta

const Template: Story<RouterElement> = args => <Navlink {...args} />

const exampleComponent: React.FC = () => <div>Example</div>
export const Example = Template.bind({})
Example.args = {
  name: 'Example',
  path: 'Example/route',
  component: exampleComponent,
  exact: true
}
