import React from 'react';
import StyledBox from './Box.styled';

export interface BoxProps {
  bg?: string;
  row?: boolean;
  col?: boolean;
  center?: boolean;
  sa?: boolean;
  sb?: boolean;
  fs?: boolean;
  fe?: boolean;
  children?: any;
}

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};
