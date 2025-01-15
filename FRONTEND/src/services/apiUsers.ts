import { apiLink } from "./apiConfig";

export async function getUsers() {
  const res = await fetch(`${apiLink}/users`);
  const data = await res.json();

  //tu kiedys dodaj blad

  return data.data.data;
}

export async function getUser(username: string) {
  const res = await fetch(`${apiLink}/users/${username}`);
  const data = await res.json();

  return data.data.data;
}

export async function deleteUser(username: string) {
  const res = await fetch(`${apiLink}/users/${username}`, {
    method: "DELETE",
    headers: { "Content-Type": "appliction/json" },
  });
  const data = await res.json();

  if (data.status === "fail") throw new Error(data.message);

  return data.data;
}

export async function createUser(username: string, password: string) {
  const res = await fetch(`${apiLink}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();

  if (data.status === "fail") throw new Error(data.message);

  return data.data;
}

export async function login(username: string, password: string) {
  const res = await fetch(`${apiLink}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (data.status === "fail") throw new Error(data.message);

  return data.data;
}
