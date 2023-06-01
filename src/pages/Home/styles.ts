import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  font-family: Nunito, sans-serif;
`;

export const Publications = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;

  h3 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme["gray-200"]};
  }

  p {
    font-size: 0.875em;
    color: ${({ theme }) => theme["gray-400"]};
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  border-radius: 6px;
  color: ${({ theme }) => theme["gray-100"]};

  background: ${({ theme }) => theme["gray-1000"]};
  border: 1px solid ${({ theme }) => theme["gray-600"]};

  &::placeholder {
    color: ${({ theme }) => theme["gray-500"]};
    line-height: 1.6rem;
  }
`;

export const ListCardPosts = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  margin-bottom: 14rem;
`;
