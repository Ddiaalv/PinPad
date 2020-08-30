import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PinPad } from './PinPad';

export default {
  title: 'Example/PinPad',
  component: PinPad,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <PinPad {...args}>Primary</PinPad>
);

export const DefaultView = Template.bind({});
DefaultView.args = {};