import React from 'react';
import { action } from '@storybook/addon-actions';
import Slider from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
      defaultValue: 0,
    },
    max: {
      control: 'number',
      defaultValue: 100,
    },
    step: {
      control: 'number',
      defaultValue: 1,
    },
    onStop: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  onStop: action('stop'),
};

export const WithStop = Template.bind({});
WithStop.args = {
  min: 0,
  max: 100,
  step: 1,
  onStop: action('stop'),
};
