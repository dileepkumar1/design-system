import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    shadow: {
      control: {
        type: 'select',
        options: ['none', 'small', 'medium', 'large'],
      },
    },
    radius: {
      control: {
        type: 'select',
        options: ['none', 'small', 'medium', 'large'],
      },
    },
  },
};

const Template = (args) => <Card {...args}>This is a card</Card>;

export const Default = Template.bind({});
Default.args = {
  shadow: 'none',
  radius: 'none',
};

export const SmallShadowSmallRadius = Template.bind({});
SmallShadowSmallRadius.args = {
  shadow: 'small',
  radius: 'small',
};

export const MediumShadowMediumRadius = Template.bind({});
MediumShadowMediumRadius.args = {
  shadow: 'medium',
  radius: 'medium',
};

export const LargeShadowLargeRadius = Template.bind({});
LargeShadowLargeRadius.args = {
  shadow: 'large',
  radius: 'large',
};
