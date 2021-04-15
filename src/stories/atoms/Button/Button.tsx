import React from 'react';
import StyledButton from './Button.styled';
export interface ButtonProps {
  title: string;
  secondary?: boolean;
  tertiary?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  return <StyledButton {...props}>{title}</StyledButton>;
};
