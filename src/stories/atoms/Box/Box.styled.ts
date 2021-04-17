import styled from 'styled-components';
import { BoxProps } from './Box';

const handleAlignment: (props: BoxProps) => string = (
  props: BoxProps
): string => {
  if (props.center) {
    return 'center';
  }
  if (props.fs) {
    return 'flex-start';
  }
  if (props.fe) {
    return 'flex-end';
  }
  if (props.sb) {
    return 'space-between';
  }
  if (props.sa) {
    return 'space-around';
  }
  return '';
};

const handleMargin: (props: BoxProps) => string = (props: BoxProps): string => {
  if (props.mg === 'mg-1') {
    return '1rem';
  }
  if (props.mg === 'mg-2') {
    return '2rem';
  }
  if (props.mg === 'mg-3') {
    return '3rem';
  }
  if (props.mg === 'mg-4') {
    return '4rem';
  }
  return '';
};
const handlePadding: (props: BoxProps) => string = (
  props: BoxProps
): string => {
  if (props.pd === 'pd-1') {
    return '1rem';
  }
  if (props.pd === 'pd-2') {
    return '2rem';
  }
  if (props.pd === 'pd-3') {
    return '3rem';
  }
  if (props.pd === 'pd-4') {
    return '4rem';
  }
  return '';
};

const Box = styled.div<BoxProps>`
  background-color: ${(props) => props.bg || null};
  margin: ${(props) => handleMargin(props)}};
  padding: ${(props) => handlePadding(props)}};
  &:hover {
    cursor: ${(props) => (props.onClick ? 'pointer' : null)};
    background-color: ${(props) => (props.onClick ? '#5d5d81' : null)};;
  }

  display: ${(props) => {
    if (props.row || props.col) {
      return 'flex';
    }
    return null;
  }};

  flex-direction: ${(props) => {
    if (props.row) {
      return 'row';
    }
    if (props.col) {
      return 'column';
    }
  }};

  justify-content: ${(props) => handleAlignment(props)};

  align-items: ${(props) => (props.center ? 'center' : null)};
`;

export default Box;
