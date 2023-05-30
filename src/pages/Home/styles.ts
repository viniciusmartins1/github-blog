import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  font-family: Nunito, sans-serif;
`;

export const ProfileContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme["gray-800"]};
  border-radius: 10px;
  margin-top: -6rem;

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme["gray-100"]};
    line-height: 1.95rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme["blue-500"]};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.7rem;
  }
`;

export const ProfileDetais = styled.p`
  font-size: 1rem;
  line-height: 1.625rem;
  color: ${({ theme }) => theme["gray-300"]};
`;

export const ProfileInfos = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme["gray-200"]};

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }
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

export const CardPost = styled.div`
  width: 26rem;
  background: ${({ theme }) => theme["gray-700"]};
  padding: 2rem;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    align-items: baseline;
    gap: 1rem;

    h3 {
      flex: 1;
      font-size: 1.25rem;
      line-height: 2rem;
      color: ${({ theme }) => theme["gray-100"]};
    }

    p {
      font-size: 0.875rem;
      color: ${({ theme }) => theme["gray-400"]};
    }
  }

  div + p {
    font-size: 1rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme["gray-300"]};
    display: -webkit-box;
    -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ListCardPosts = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  margin-bottom: 14rem;
`;
