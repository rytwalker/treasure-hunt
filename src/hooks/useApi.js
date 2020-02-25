import axios from "axios";

export function useApi(method, slug, data = {}) {
  return axios({
    method,
    url: `${process.env.REACT_APP_API_URL_BASE}/${slug}`,
    headers: {
      Authorization: `${process.env.REACT_APP_API_TOKEN}`
    },
    data
  });
}
