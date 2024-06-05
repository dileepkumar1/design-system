import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

const Template = (args) => <Checkbox {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: 'Main Checkbox',
  variant: 'main',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Checkbox',
  disabled: true,
};

export const Alert = Template.bind({});
Alert.args = {
  label: 'Alert Checkbox',
  alert: true,
};
