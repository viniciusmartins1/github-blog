import styled from "styled-components";

export const PostContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  font-family: Nunito, sans-serif;
`;

export const PostInfoContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme["gray-800"]};
  border-radius: 10px;
  margin-top: -6rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme["gray-100"]};
  }
`;

export const InfoLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  a,
  button {
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

  button {
    background-color: transparent;
    border: 0;
  }
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

export const PostInfos = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme["gray-400"]};

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
