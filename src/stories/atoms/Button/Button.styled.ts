import styled from 'styled-components';
import { ButtonProps } from './Button';

const handleBackgroundColor: (props: ButtonProps) => string = (
  props: ButtonProps
): string => {
  if (props.secondary) {
    return '#5D5D81';
  }
  if (props.tertiary) {
    return '#BFCDE0';
  }
  if (props.outline) {
    return '#FEFCFD';
  }
  return '#3B3355';
};

const handleTextColor: (props: ButtonProps) => string = (
  props: ButtonProps
): string => {
  if (props.outline) {
    return '#000505';
  }
  return '#FEFCFD';
};

const handleWidth: (props: ButtonProps) => string = (
  props: ButtonProps
): string => {
  if (props.large) {
    return '7rem';
  }
  if (props.small) {
    return '4rem';
  }
  return '5.5rem';
};

const handelHeight: (props: ButtonProps) => string = (
  props: ButtonProps
): string => {
  if (props.large) {
    return '3rem';
  }
  if (props.small) {
    return '2rem';
  }
  return '2.5rem';
};

const Button = styled.button<ButtonProps>`
  color: ${(props) => {
    return handleTextColor(props);
  }};
  background-color: ${(props: ButtonProps) => {
    return handleBackgroundColor(props);
  }};
  border: ${(props: ButtonProps) => (props.outline ? 1 : 0)};
  border-color: ${(props: ButtonProps) => (props.outline ? '#000505' : null)};
  border-radius: 0.2rem;
  width: ${(props: ButtonProps) => {
    return handleWidth(props);
  }};
  height: ${(props: ButtonProps) => {
    return handelHeight(props);
  }};
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
