import styled from "styled-components";

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
  flex: 1;
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
