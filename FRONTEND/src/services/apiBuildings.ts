import { apiLink } from "./apiConfig";

export async function getBuildings(userId: number) {
  const res = await fetch(`${apiLink}/buildings/${userId}`);
  const data = await res.json();

  return data.data.data;
}

export async function getBuilding(
  userId: number,
  buildingType: "central" | "hydropolis" | "laboratory" | "farm" | "powerhouse"
) {
  const res = await fetch(`${apiLink}/buildings/${userId}/${buildingType}`);
  const data = await res.json();

  return data.data;
}

export async function updateBuilding(
  userId: number,
  buildingType: string,
  buildingLevel: number
) {
  const res = await fetch(`${apiLink}/buildings/${userId}/${buildingType}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ level: buildingLevel }),
  });

  const data = await res.json();

  return data;
}
