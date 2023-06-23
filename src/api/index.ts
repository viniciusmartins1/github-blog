import axios from "axios";

const BASE_URL = "https://api.github.com";
export const PROFILE_NAME = "viniciusmartins1";
export const REPO_NAME = "github-blog";
export const GITHUB_PATH_ROUTE = `${BASE_URL}/repos/${PROFILE_NAME}/${REPO_NAME}/issues`;

export const api = axios.create({
  baseURL: BASE_URL,
});
