export interface User {
  id: number;
  username: string;
  password?: string;
  level: number;
  coins?: number;
  oxygen?: number;
  temperature?: number;
  done_tasks?: number;
}
