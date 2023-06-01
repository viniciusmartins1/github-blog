import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from "phosphor-react";
import * as s from "./styles";
import { IProfile } from "../..";

interface IProfileHeaderProps {
  profile: IProfile | null;
}

export function ProfileHeader({ profile }: IProfileHeaderProps) {
  return (
    <s.ProfileContainer>
      <img src={profile?.avatar_url} alt="Imagem de perfil" />
      <s.ProfileContent>
        <s.ProfileTitle>
          <h2>{profile?.name}</h2>
          <a target="_blank" href={profile?.html_url}>
            github <ArrowSquareUpRight weight="duotone" size={24} />{" "}
          </a>
        </s.ProfileTitle>
        <s.ProfileDetais>{profile?.bio}</s.ProfileDetais>

        <s.ProfileInfos>
          <p>
            <GithubLogo size={18} /> {profile?.login}
          </p>
          {!!profile?.company && (
            <p>
              <Buildings size={18} /> {profile?.company}
            </p>
          )}
          <p>
            <Users size={18} /> {profile?.followers} seguidores
          </p>
        </s.ProfileInfos>
      </s.ProfileContent>
    </s.ProfileContainer>
  );
}
