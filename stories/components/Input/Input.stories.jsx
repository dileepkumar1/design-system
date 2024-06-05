// Input.stories.js
import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['default', 'medium', 'large'],
      },
    },
    borderRadius: {
      control: {
        type: 'select',
        options: ['none', 'small', 'large'],
      },
    },
    isDisabled: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  borderRadius: 'none',
  isDisabled: false,
  isRequired: false,
  placeholder: 'Enter text...',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  borderRadius: 'none',
  isDisabled: false,
  isRequired: false,
  placeholder: 'Enter text...',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  borderRadius: 'none',
  isDisabled: false,
  isRequired: false,
  placeholder: 'Enter text...',
};

export const BorderSmall = Template.bind({});
BorderSmall.args = {
  size: 'default',
  borderRadius: 'small',
  isDisabled: false,
  isRequired: false,
  placeholder: 'Enter text...',
};

export const BorderLarge = Template.bind({});
BorderLarge.args = {
  size: 'default',
  borderRadius: 'large',
  isDisabled: false,
  isRequired: false,
  placeholder: 'Enter text...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'default',
  borderRadius: 'none',
  isDisabled: true,
  isRequired: false,
  placeholder: 'Enter text...',
};

export const Required = Template.bind({});
Required.args = {
  size: 'default',
  borderRadius: 'none',
  isDisabled: false,
  isRequired: true,
  placeholder: 'Enter text...',
};
