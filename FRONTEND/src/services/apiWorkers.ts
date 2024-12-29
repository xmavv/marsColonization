import { apiLink } from "./apiConfig";

export async function getBuildings(userId: number) {
  const res = await fetch(`${apiLink}/workers/${userId}`);
  const data = await res.json();

  return data;
}
