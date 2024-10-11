import { request as api } from "./apiHandler";

async function createApi(body) {
  return await api("post", "task", body, { auth: true });
}

async function updateApi(id, body) {
  return await api("put", `task/${id}`, body, { auth: true });
}

async function deleteApi(id) {
  return await api("delete", `task/${id}`, {}, { auth: true });
}

async function getApi() {
  return await api("get", "task", {}, { auth: true });
}

export { createApi, updateApi, deleteApi, getApi };
