import { apiLink } from "./apiConfig";

export async function getResources(userId: number) {
  const res = await fetch(`${apiLink}/resources/${userId}`);
  const data = await res.json();

  return data;
}

interface resourcesToUpdate {
  coins?: number;
  energy?: number;
  food?: number;
  water?: number;
  oxygen?: number;
  temperature?: number;
}

export async function updateResources(
  userId: number,
  resourcesToUpdate: resourcesToUpdate
) {
  const res = await fetch(`${apiLink}/resources/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...resourcesToUpdate }),
  });

  const data = await res.json();

  return data;
}
