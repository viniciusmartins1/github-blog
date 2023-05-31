import ReactMarkdown from "react-markdown";
import { Header } from "../../components/Header";
import * as s from "./styles";
import {
  ArrowSquareUpRight,
  CaretLeft,
  CalendarBlank,
  ChatCircleDots,
  GithubLogo,
} from "phosphor-react";

export function Post() {
  return (
    <>
      <Header />
      <s.PostContainer>
        <s.PostInfoContainer>
          <s.InfoLinksContainer>
            <button>
              <CaretLeft size={20} /> Voltar
            </button>
            <a target="_blank" href="https://github.com/viniciusmartins1">
              Ver no github
              <ArrowSquareUpRight size={24} />
            </a>
          </s.InfoLinksContainer>

          <h2>JavaScript data types and data structures</h2>

          <s.PostInfos>
            <p>
              <GithubLogo size={18} /> cameronwll
            </p>
            <p>
              <CalendarBlank size={18} /> Há 1 dia
            </p>
            <p>
              <ChatCircleDots size={18} /> 5 comentários
            </p>
          </s.PostInfos>
        </s.PostInfoContainer>
        <section>
          <ReactMarkdown>`teste`</ReactMarkdown>
        </section>
      </s.PostContainer>
    </>
  );
}
