import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { CardPost } from "./components/CardPost";
import { ProfileHeader } from "./components/ProfileHeader";
import * as s from "./styles";
import { api } from "../../api";

export interface IProfile {
  name: string;
  bio: string;
  login: string;
  company?: string;
  followers: number;
  avatar_url: string;
  html_url: string;
}

export function Home() {
  const [profileData, setProfileData] = useState<IProfile | null>(null);

  async function getProfileDetails() {
    const response = await api.get("/users/rocketseat");
    const data = await response.data;

    setProfileData({ ...data });
  }

  useEffect(() => {
    getProfileDetails();
  }, [getProfileDetails]);

  return (
    <>
      <Header />
      <s.HomeContainer>
        <ProfileHeader profile={profileData} />

        <section>
          <s.Publications>
            <h3>Publicações</h3>
            <p>6 publicações</p>
          </s.Publications>
          <form action="">
            <s.InputSearch type="text" placeholder="Buscar conteúdo" />
          </form>
        </section>

        <s.ListCardPosts>
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </s.ListCardPosts>
      </s.HomeContainer>
    </>
  );
}
