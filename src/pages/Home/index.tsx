import { Header } from "../../components/Header";
import { CardPost } from "./components/CardPost";
import { ProfileHeader } from "./components/ProfileHeader";
import * as s from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <s.HomeContainer>
        <ProfileHeader />

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
