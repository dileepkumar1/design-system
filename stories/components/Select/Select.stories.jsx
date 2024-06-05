// Select.stories.js
import React from 'react';
import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'medium', 'small', 'large'],
    },
    options: {
      control: {
        type: 'object',
      },
      table: {
        disable: true,
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
};

const Template = (args) => <Select {...args} />;

const commonOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  options: commonOptions,
  isDisabled: false,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  options: commonOptions,
  isDisabled: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  options: commonOptions,
  isDisabled: false,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  options: commonOptions,
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'default',
  options: commonOptions,
  isDisabled: true,
};
