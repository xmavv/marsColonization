export interface Task {
  id: number;
  name: string;
  description: string;
  coins: number;
  workers: number;
  duration: number;
  type: "energy" | "food" | "water" | "oxygen";
  resources: number;
}
