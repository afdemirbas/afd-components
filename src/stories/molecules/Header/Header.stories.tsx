import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Atom } from '@styled-icons/fa-solid';
import { Header } from './Header';
import { Box } from '../../atoms/Box/Box';
const onClick = () => {
  alert('Clicked!');
};
export default {
  title: 'Molecules/Header',
  component: Header,
} as Meta;

export const Default = () => (
  <Header>
    <Box>HI</Box>
    <Box>HI</Box>
    <Box>HI</Box>
  </Header>
);
