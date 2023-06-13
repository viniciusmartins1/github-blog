import { useEffect, useState, ChangeEvent } from "react";
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

export interface IIssues {
  number: number;
  title: string;
  created_at: string;
  body: string;
}

const PROFILE_NAME = "rocketseat-education";
const REPO_NAME = "reactjs-github-blog-challenge";

export function Home() {
  const [profileData, setProfileData] = useState<IProfile | null>(null);
  const [issues, setIssues] = useState<IIssues[] | null>(null);
  const [search, setSearch] = useState<string>("Boas praticas");
  const [totalCount, setTotalCount] = useState<number>(0);

  async function getProfileDetails() {
    const response = await api.get(`/users/${PROFILE_NAME}`);
    const data = await response.data;

    setProfileData({ ...data });
  }

  async function getIssues(query: string) {
    const response = await api.get("/search/issues", {
      params: {
        q: query,
        repo: PROFILE_NAME + "/" + REPO_NAME,
      },
    });
    const data = await response.data;
    console.log("Issues", data);

    setIssues([...data.items]);
    setTotalCount(data.total_count);
  }

  useEffect(() => {
    getProfileDetails();
    getIssues(search);
  }, [getProfileDetails]);

  function handleOnChangeSearchInput(event: ChangeEvent<HTMLInputElement>) {
    console.log("VALUE", event.target.value);
  }

  return (
    <>
      <Header />
      <s.HomeContainer>
        <ProfileHeader profile={profileData} />

        <section>
          <s.Publications>
            <h3>Publicações</h3>
            <p>{totalCount} publicações</p>
          </s.Publications>
          <form action="">
            <s.InputSearch
              onChange={handleOnChangeSearchInput}
              type="text"
              placeholder="Buscar conteúdo"
            />
          </form>
        </section>

        <s.ListCardPosts>
          {issues?.map((issue) => (
            <CardPost item={issue} />
          ))}
        </s.ListCardPosts>
      </s.HomeContainer>
    </>
  );
}
