import React from 'react';
import StyledHeader from './Header.styled';
import { BoxProps } from '../../atoms/Box/Box';
export interface HeaderProps extends BoxProps {}

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
  return <StyledHeader {...props}>{children}</StyledHeader>;
};
