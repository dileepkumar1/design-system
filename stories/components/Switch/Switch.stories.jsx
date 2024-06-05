// Switch.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Indicates whether the switch is checked or not.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch if set to true.',
    },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: action('changed'),
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  onChange: action('changed'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: true,
  onChange: action('changed'),
  disabled: true,
};
