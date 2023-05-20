import styled from "styled-components";
import effectImg from "../../assets/effect.png";
import effectImg2 from "../../assets/effect2.png";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-800"]};
  background-image: url(${effectImg}), url(${effectImg2});
  background-repeat: no-repeat;
  background-position: right, left;
  height: 18.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
