import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './App.style';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    primaryColor: {
      description: 'Only can switch the primaryColor if primary is false.',
      control: 'color',
    },
    primary: { control: 'boolean' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args}>Text Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
