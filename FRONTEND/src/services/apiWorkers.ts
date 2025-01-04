import { apiLink } from "./apiConfig";

export async function getWorkers(userId: number) {
  const res = await fetch(`${apiLink}/workers/${userId}`);
  const data = await res.json();

  return data.data;
}

export interface workersToUpdate {
  biologists?: number;
  hydrologists?: number;
  chemists?: number;
  electricians?: number;
  meteorologist?: number;
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
