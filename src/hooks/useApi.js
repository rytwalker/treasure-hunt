import axios from "axios";

const safeAxios = (method, slug, data = null) => {
  try {
    const requestObject = {
      method,
      url: `${process.env.REACT_APP_API_URL_BASE}/${slug}`,
      headers: {
        Authorization: `${process.env.REACT_APP_API_TOKEN}`
      }
    };

    if (data) requestObject.data = data;

    return axios(requestObject);
  } catch (error) {
    console.dir(error);
  }
};

export const useApi = () => (slug, data = null) => {
  return {
    get: safeAxios("get", slug),
    post: safeAxios("post", slug, data)
  };
};
