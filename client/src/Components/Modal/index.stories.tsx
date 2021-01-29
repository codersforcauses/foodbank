import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import ModalContainer, { ModalContainerProps } from '.'

export default {
  title: 'Components/ModalContainer',
  component: ModalContainer
} as Meta

const Template: Story<ModalContainerProps> = args => (
  <ModalContainer {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  header: 'Header',
  children: 'Modal Text'
}
