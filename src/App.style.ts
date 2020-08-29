import styled from 'styled-components';

export interface ButtonProps {
  primaryColor?: string;
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.primary ? 'orange' : props.primaryColor)};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => (props.primary ? 'orange' : props.primaryColor)};
  border-radius: 3px;
`;
