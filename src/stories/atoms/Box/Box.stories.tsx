import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Atom } from '@styled-icons/fa-solid';
import { Box, BoxProps } from './Box';

const onClick = () => {
  alert('Clicked!');
};
export default {
  title: 'Atoms/Box',
  component: Box,
} as Meta;

export const Default = () => <Box>BOX</Box>;
export const Colored = () => <Box bg="red">BOX</Box>;
export const Row = () => (
  <Box row>
    <Box bg="red" mg="mg-1">
      Box
    </Box>
    <Box bg="green">Box</Box>
    <Box bg="blue">Box</Box>
  </Box>
);
export const Column = () => (
  <Box col>
    <Box bg="red">Box</Box>
    <Box bg="green">Box</Box>
    <Box bg="blue">Box</Box>
  </Box>
);
export const Clickable = () => <Box onClick={onClick}>CLICK ME!</Box>;
