import styled from "styled-components";
import theme from "../../../utils/constants/theme";

const Heading = styled.h2`
  margin-bottom: 1rem;
  color: ${({ variant }) => theme.colors[variant] || theme.colors.primary};
  font-size: ${({ size }) => theme.sizeHead[size] || theme.sizeHead.primary};

  @media screen and (min-width: 992px) {
    max-width: 1200px;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: ${({ variant }) => theme.colors[variant] || theme.colors.primary};
`;

export { Heading, Paragraph };
