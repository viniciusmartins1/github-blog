import axios from "axios";

export const PROFILE_NAME = "rocketseat-education";
export const REPO_NAME = "reactjs-github-blog-challenge";

export const api = axios.create({
  baseURL: "https://api.github.com",
});
