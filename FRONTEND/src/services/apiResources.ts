import { apiLink } from "./apiConfig";

export async function getResources(userId: number) {
  const res = await fetch(`${apiLink}/resources/${userId}`);
  const data = await res.json();

  return data;
}
