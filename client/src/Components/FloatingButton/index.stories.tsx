import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { FloatingButton } from '.';

export default {
  title: 'Components/FloatingButton',
  component: FloatingButton,
} as Meta;

const Template: Story = (args) => <FloatingButton {...args} />;

export const Primary = Template.bind({});
