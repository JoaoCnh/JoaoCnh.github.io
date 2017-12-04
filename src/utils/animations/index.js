import { css, keyframes } from "styled-components";

const animation = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

export default delay =>
  `
    animation: ${animation} 0.3s;
    animation-delay: ${delay}s;
    animation-fill-mode: forwards;
    opacity: 0;
  `;

const animIn = keyframes`
  0%   { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0px); }
  `;

export const fadeIn = (delay = 0) => css`
  animation: ${animIn} 0.5s;
  animation-fill-mode: forwards;
  animation-delay: ${delay}s;
  opacity: 0;
`;
