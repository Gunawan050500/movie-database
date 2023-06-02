import styled from "styled-components";

const StyledForm = styled.nav`
  margin: 5rem 1rem;
  padding: 1rem;

  section {
    display: flex;
    flex-direction: column;
  }

  .form__left {
    display: none;
  }

  img {
    max-width: 100%;
    border-radius: 25px;
    height: auto;
  }

  .form__right {
  }

  h2 {
    text-align: center;
    color: #4361ee;
    font-size: 2.44rem;
    margin-bottom: 1rem;
  }

  .form__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  label {
    margin-bottom: 1rem;
  }

  input {
    outline: none;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    border: 1px solid #64748b;
  }

  input:focus {
    border: 1px solid #4361ee;
  }

  select {
    outline: none;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    background-color: #fff;
  }

  select:focus {
    border: 1px solid #4361ee;
  }

  @media screen and (min-width: 992px) {
    max-width: 1200px;
    margin: 5rem auto;

    section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .form__left {
      display: block;
      flex-basis: 60%;
    }

    .form__right {
      flex-basis: 40%;
    }
  }
`;

export default StyledForm;
