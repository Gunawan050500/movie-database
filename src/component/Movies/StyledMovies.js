import styled from "styled-components";

const StyledMovies = styled.div`
  margin: 1rem;

  section {
    margin: 5rem 0;
    text-align: center;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #4361ee;
  }

  .movie__container {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    .movie__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

export default StyledMovies;
