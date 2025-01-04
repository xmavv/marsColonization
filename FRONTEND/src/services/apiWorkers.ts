import { apiLink } from "./apiConfig";

export async function getWorkers(userId: number) {
  const res = await fetch(`${apiLink}/workers/${userId}`);
  const data = await res.json();

  return data.data;
}

interface workersToUpdate {
  hydrologist: string;
  chemist: string;
  electrician: string;
  biologist: string;
  meteorologist: string;
}

export async function updateWorkers(
  userId: number,
  workersToUpdate: workersToUpdate
) {
  const res = await fetch(`${apiLink}/workers/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...workersToUpdate }),
  });

  const data = await res.json();

  return data;
}
