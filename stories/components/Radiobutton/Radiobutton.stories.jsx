// RadioButton.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';
import RadioButton from './Radiobutton';

export default {
  title: 'Components/Radio Button',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['default', 'checked', 'unchecked', 'disabled', 'checked-and-disabled'],
    },
  },
};

const Template = ({ variant, ...args }) => <RadioButton variant={variant} {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default',
  label: 'Default',
  onChange: action('changed'),
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'checked',
  label: 'Checked',
  checked: true,
  onChange: action('changed'),
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  id: 'unchecked',
  label: 'Unchecked',
  onChange: action('changed'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled',
  label: 'Disabled',
  disabled: true,
  onChange: action('changed'),
};

export const CheckedAndDisabled = Template.bind({});
CheckedAndDisabled.args = {
  id: 'checked-and-disabled',
  label: 'Checked and Disabled',
  checked: true,
  disabled: true,
  onChange: action('changed'),
};
