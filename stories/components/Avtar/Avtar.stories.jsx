import React from 'react';
import Avtar from './Avtar';

export default {
  title: 'Components/Avtar',
  component: Avtar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['default', 'small', 'medium', 'large'],
    },
    alt: { control: 'text' },
    src: { control: 'text' },
  },
};

export const Default = {
  args: {
    variant: 'default',
    alt: 'Avatar Image',
    src: 'https://qcekikwvowptfmzqtmxh.supabase.co/storage/v1/object/public/drootsimg/bookcategories/avtar.png',
  },
};

export const Small = {
    args: {
      variant: 'small',
      alt: 'Avatar Image',
      src: 'https://qcekikwvowptfmzqtmxh.supabase.co/storage/v1/object/public/drootsimg/bookcategories/avtar.png',
    },
};

export const Medium = {
    args: {
      variant: 'medium',
      alt: 'Avatar Image',
      src: 'https://qcekikwvowptfmzqtmxh.supabase.co/storage/v1/object/public/drootsimg/bookcategories/avtar.png',
    },
};

export const Large = {
    args: {
      variant: 'large',
      alt: 'Avatar Image',
      src: 'https://qcekikwvowptfmzqtmxh.supabase.co/storage/v1/object/public/drootsimg/bookcategories/avtar.png',
    },
};