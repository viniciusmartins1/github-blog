import { HeaderContainer } from "./styles";
import blogLogoSvg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={blogLogoSvg} alt="" />
    </HeaderContainer>
  );
}
