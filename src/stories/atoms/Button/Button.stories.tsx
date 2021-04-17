import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Atom } from '@styled-icons/fa-solid';
import { Button, ButtonProps } from './Button';

const atom = <Atom size="18" />;
const onClick = () => {
  alert('Clicked!');
};
export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

export const Default = () => <Button label="Button" />;
export const WithIcon = () => <Button label="Button" icon={atom} />;
export const WithFunction = () => <Button label="Button" onClick={onClick} />;
export const Secondary = () => <Button secondary label="Button" />;
export const Tertiary = () => <Button tertiary label="Button" />;
export const Outline = () => <Button outline label="Button" />;
export const Large = () => <Button large label="Button" />;
export const Small = () => <Button small label="Button" />;
