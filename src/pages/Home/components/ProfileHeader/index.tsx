import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from "phosphor-react";
import * as s from "./styles";

export function ProfileHeader() {
  return (
    <s.ProfileContainer>
      <img
        src="https://github.com/viniciusmartins1.png"
        alt="Imagem de perfil"
      />
      <s.ProfileContent>
        <s.ProfileTitle>
          <h2>Vinicius Martins</h2>
          <a target="_blank" href="https://github.com/viniciusmartins1">
            github <ArrowSquareUpRight weight="duotone" size={24} />{" "}
          </a>
        </s.ProfileTitle>
        <s.ProfileDetais>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </s.ProfileDetais>

        <s.ProfileInfos>
          <p>
            <GithubLogo size={18} /> cameronwll
          </p>
          <p>
            <Buildings size={18} /> Rocketseat
          </p>
          <p>
            <Users size={18} /> 32 seguidores
          </p>
        </s.ProfileInfos>
      </s.ProfileContent>
    </s.ProfileContainer>
  );
}
