import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Atom } from '@styled-icons/fa-solid';
import { Box, BoxProps } from './Box';

const atom = <Atom size="18" />;
const onClick = () => {
  alert('Clicked!');
};
export default {
  title: 'Atoms/Box',
  component: Box,
} as Meta;

export const Default = () => <Box>BOX</Box>;
export const Colored = () => <Box bg="red">BOX</Box>;
