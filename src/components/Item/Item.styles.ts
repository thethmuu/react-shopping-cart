import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #424242;
  color: #fff;
  width: 100%;
  border-radius: 5px;
  height: 100%;
  button {
    color: var(--primary-light);
    border-radius: 0 0 20px 20px;
    border-top: 1px solid var(--sec-light);
    padding: 1rem 0;
    font-weight: bold;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }
  div {
    padding: 1rem;
    height: 100%;
  }
  h3 {
    color: var(--primary-light);
  }
  p {
    color: var(--sec-light);
  }
`;
