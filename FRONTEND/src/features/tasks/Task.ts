export interface Task {
  id: number;
  name: string;
  description: string;
  coins: number;
  workers: number;
  durtation: number;
  type: "energy" | "food" | "water" | "oxygen";
  resources: number;
}
