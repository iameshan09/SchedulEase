import { request as api } from "./apiHandler";

async function signInApi(body) {
  return await api("post", "user/signin", body, { auth: false });
}

async function signUpApi(body) {
  return await api("post", "user", body, { auth: false });
}

export { signInApi, signUpApi };
