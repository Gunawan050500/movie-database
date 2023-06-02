import styled, { css } from "styled-components";
import theme from "../../../utils/constants/theme";

// const colors = {
//   primary: "blue",
//   secondary: "#636e72",
//   danger: "red",
//   warning: "yellow",
//   success: "green",
// };

// const hovers = {
//   primary: "#3498db",
//   secondary: "#b2bec3",
//   danger: "#ff7675",
//   warning: "#ffeaa7",
//   success: "#55efc4",
// };

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  background-color: ${({ variant }) =>
    theme.colors[variant] || theme.colors.primary};

  ${({ size }) => {
    return theme.sizes[size];
  }};

  /* hover */
  &:hover {
    background-color: ${function (props) {
      if (props.variant) {
        return props.theme.hovers[props.variant];
      } else {
        return props.theme.hovers.primary;
      }
    }};
  }

  ${(props) => {
    return (
      props.full &&
      css`
        width: 100%;
        display: block;
      `
    );
  }}
`;

export default Button;
