import React from 'react';
import StyledButton from './Button.styled';

export interface ButtonProps {
  label?: string;
  secondary?: boolean;
  tertiary?: boolean;
  outline?: boolean;
  small?: boolean;
  large?: boolean;
  icon?: any;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ icon, label, ...props }) => {
  return (
    <StyledButton {...props}>
      {icon} {label}
    </StyledButton>
  );
};
