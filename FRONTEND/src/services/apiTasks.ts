import { apiLink } from "./apiConfig";

export async function getTasks(userId: number) {
  const res = await fetch(`${apiLink}/tasks/${userId}`);
  const data = await res.json();

  return data.data.data;
}

export async function addTask(userId: number, taskId: number) {
  const res = await fetch(`${apiLink}/tasks/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task_id: taskId }),
  });
  const data = await res.json();

  return data;
}
