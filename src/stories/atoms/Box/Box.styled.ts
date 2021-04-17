import styled, { css } from 'styled-components';
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
  return 'center';
};

const Box = styled.div<BoxProps>`
  background-color: ${(props) => props.bg || null}
    ${(props: BoxProps) =>
      props.row &&
      css`
        display: flex;
        flex-direction: row;
        justify-content: ${(props: BoxProps) => handleAlignment(props)};
      `}
    ${(props: BoxProps) =>
      props.col &&
      css`
        display: flex;
        flex-direction: col;
        justify-content: ${(props: BoxProps) => handleAlignment(props)};
      `};
`;

export default Box;
