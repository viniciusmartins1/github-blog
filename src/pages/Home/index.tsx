import { useEffect, useState, ChangeEvent, useRef } from "react";
import { Header } from "../../components/Header";
import { CardPost } from "./components/CardPost";
import { ProfileHeader } from "./components/ProfileHeader";
import { Loading } from "../../components/Loading";
import * as s from "./styles";
import { PROFILE_NAME, REPO_NAME, api } from "../../api";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";

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

export function Home() {
  const [profileData, setProfileData] = useState<IProfile | null>(null);
  const [issues, setIssues] = useState<IIssues[] | null>(null);
  const [search, setSearch] = useState<string>("");
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  async function getProfileDetails() {
    setLoading(true);
    const response = await api.get(`/users/${PROFILE_NAME}`);
    const data = await response.data;

    setProfileData({ ...data });
    setLoading(false);
  }

  async function getIssues(query: string) {
    setLoading(true);
    const response = await api.get(
      `/search/issues?q=${query} repo:${PROFILE_NAME}/${REPO_NAME}`
    );
    const data = await response.data;

    setIssues([...data.items]);
    setTotalCount(data.total_count);
    setLoading(false);
  }

  useEffect(() => {
    getProfileDetails();
    getIssues(search);
  }, []);

  const debouncedSearch = useRef(
    debounce((search: string) => {
      getIssues(search);
    }, 1000)
  ).current;

  function handleOnChangeSearchInput(event: ChangeEvent<HTMLInputElement>) {
    const searchText = event.target.value;
    if (!searchText.trim()) return;

    setSearch(searchText);
    debouncedSearch(searchText);
  }

  function handleOnClickCard(issueId: number) {
    navigate(`post/${issueId}`);
  }

  return (
    <>
      {loading && <Loading />}
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
            <CardPost
              key={issue.number}
              item={issue}
              onClick={handleOnClickCard}
            />
          ))}
        </s.ListCardPosts>
      </s.HomeContainer>
    </>
  );
}
