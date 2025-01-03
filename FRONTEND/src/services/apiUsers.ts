import { apiLink } from "./apiConfig";

export async function getUsers() {
  const res = await fetch(`${apiLink}/users`);
  const data = await res.json();

  return data;
}

export async function createUser(username: string, password: string) {
  const res = await fetch(`${apiLink}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();

  return data;
}
