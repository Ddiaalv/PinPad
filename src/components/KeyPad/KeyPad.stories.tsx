import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { KeyPad } from './KeyPad';

export default {
  title: 'Example/KeyPad',
  component: KeyPad,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <KeyPad {...args}>Primary</KeyPad>
);

export const DefaultView = Template.bind({});
DefaultView.args = {};