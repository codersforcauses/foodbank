import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Navbar } from '.';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
