import styled from "styled-components";

const StyledContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

function Container(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}

export default Container;
