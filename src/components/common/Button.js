import styled, { css } from "styled-components";

const getGradient = color => css`linear-gradient(
  45deg,
  ${color},
  ${color.darken(0.2)}
)`;

export default styled.button`
  position: relative;
  background: ${({ buttonColor, secondary }) =>
    secondary ? "" : getGradient(buttonColor)};
  border: none;
  outline: none;
  padding: 0.75em 1.5em;
  font-weight: 400;
  border-radius: 4px;
  color: white;
  text-align: center;
  box-shadow: 0 0 100px ${props => props.buttonColor.clearer(0.3)};
  text-transform: uppercase;
  ${({ buttonColor, secondary }) =>
    secondary &&
    css`
      color: ${buttonColor};
      text-shadow: 0 0 50px ${props => props.buttonColor.clearer(0.3)};
      box-shadow: none;
    `};
`;
