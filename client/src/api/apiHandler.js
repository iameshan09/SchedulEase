import axios from "axios";

async function request(method, url, params, { responseType, authToken }) {
  const body = method === "get" ? "params" : "data";

  const config = {
    method,
    url,
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
    [body]: params || {},
    responseType,
  };

  if (authToken) {
    config.headers = {
      auth_token: authToken,
    };
  }

  return await axios.request(config);
}

const setDefaultHeader = (authToken) => {
  axios.defaults.headers.common["auth_token"] = authToken;
};

export { request, setDefaultHeader };
