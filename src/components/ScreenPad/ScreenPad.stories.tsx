import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ScreenPad } from './ScreenPad';

export default {
  title: 'Example/ScreenPad',
  component: ScreenPad,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <ScreenPad pinStatus={false} pressedPin={''} {...args}>Primary</ScreenPad>
);

export const DefaultView = Template.bind({});
DefaultView.args = {};