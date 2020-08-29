---
to: src/<%= path %>/<%= name %>/<%= name %>.stories.tsx
---
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { <%= name %> } from './<%= name %>';

export default {
  title: 'Example/<%= name %>',
  component: <%= name %>,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <<%= name %> {...args}>Primary</<%= name %>>
);

export const DefaultView = Template.bind({});
DefaultView.args = {};