import styled from "styled-components";

export const CardContainer = styled.div`
  width: 26rem;
  background: ${({ theme }) => theme["gray-700"]};
  padding: 2rem;
  border-radius: 8px;
`;

export const TitleDetais = styled.div`
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
`;

export const CardDetailsText = styled.p`
  font-size: 1rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme["gray-300"]};
  display: -webkit-box;
  -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
