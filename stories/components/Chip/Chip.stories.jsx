// src/stories/Chip.stories.js
import React from 'react';
import Chip from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
       
      },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
  },
};

const Template = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Warning',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger',
};
