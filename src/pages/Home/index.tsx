import { Header } from "../../components/Header";
import * as s from "./styles";
import {
  Users,
  GithubLogo,
  Buildings,
  ArrowSquareUpRight,
} from "phosphor-react";

export function Home() {
  return (
    <>
      <Header />
      <s.HomeContainer>
        <s.ProfileContainer>
          <img
            src="https://github.com/viniciusmartins1.png"
            alt="Imagem de perfil"
          />
          <s.ProfileContent>
            <s.ProfileTitle>
              <h2>Vinicius Martins</h2>
              <a href="https://github.com/viniciusmartins1">
                github <ArrowSquareUpRight size={24} />{" "}
              </a>
            </s.ProfileTitle>
            <s.ProfileDetais>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
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
          <s.CardPost>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <p>Há 1 dia</p>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in to list the
              built-in data structures available in
            </p>
          </s.CardPost>
          <s.CardPost>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <p>Há 1 dia</p>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in to list the
              built-in data structures available in
            </p>
          </s.CardPost>
          <s.CardPost>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <p>Há 1 dia</p>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in to list the
              built-in data structures available in
            </p>
          </s.CardPost>
          <s.CardPost>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <p>Há 1 dia</p>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in to list the
              built-in data structures available in
            </p>
          </s.CardPost>
        </s.ListCardPosts>
      </s.HomeContainer>
    </>
  );
}
