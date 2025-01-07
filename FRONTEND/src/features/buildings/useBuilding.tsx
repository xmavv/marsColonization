import { useQuery } from "@tanstack/react-query";
import { getBuilding } from "../../services/apiBuildings";

export function useBuilding(
  buildingType: "central" | "hydropolis" | "laboratory" | "farm" | "powerhouse"
) {
  const { data, isLoading } = useQuery({
    queryKey: ["building", buildingType],
    queryFn: () => getBuilding(19, buildingType),
  });

  return { data, isLoading };
}
