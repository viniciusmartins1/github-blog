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
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { useState, useEffect } from "react";
import { GITHUB_PATH_ROUTE, api } from "../../api";
import { publishedDateRelativeToNow } from "../../utils/formatter";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type UserIssue = {
  id: number;
  login: string;
};
interface IIssuePost {
  number: number;
  title: string;
  created_at: string;
  body: string;
  comments: number;
  user: UserIssue;
  html_url: string;
}

export function Post() {
  const [loading, setLoading] = useState(false);
  const [issue, setIssue] = useState<IIssuePost>({} as IIssuePost);
  const { id } = useParams();

  const navigate = useNavigate();

  async function getIssue(issueId: string) {
    setLoading(true);
    const response = await api.get(`${GITHUB_PATH_ROUTE}/${issueId}`);
    const data = await response.data;
    setIssue({ ...data });
    setLoading(false);
  }

  useEffect(() => {
    if (id) {
      getIssue(id);
    }
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <s.PostContainer>
        <s.PostInfoContainer>
          <s.InfoLinksContainer>
            <button onClick={() => navigate(-1)}>
              <CaretLeft size={20} /> Voltar
            </button>
            <a target="_blank" href={issue.html_url}>
              Ver no github
              <ArrowSquareUpRight size={24} />
            </a>
          </s.InfoLinksContainer>

          <h2>{issue.title}</h2>

          <s.PostInfos>
            <p>
              <GithubLogo size={18} /> {issue?.user?.login}
            </p>
            <p>
              <CalendarBlank size={18} />{" "}
              {!!issue.created_at &&
                publishedDateRelativeToNow(issue?.created_at)}
            </p>
            <p>
              <ChatCircleDots size={18} /> {issue.comments} comentários
            </p>
          </s.PostInfos>
        </s.PostInfoContainer>
        <s.PostDetails>
          <ReactMarkdown
            children={issue.body}
            remarkPlugins={[remarkGfm, remarkBreaks]}
            components={{
              code: ({ node, inline, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, "")}
                    style={coldarkDark}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </s.PostDetails>
      </s.PostContainer>
    </>
  );
}
