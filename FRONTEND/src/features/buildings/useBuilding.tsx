import { useQuery } from "@tanstack/react-query";
import { getBuilding } from "../../services/apiBuildings";
import { useAuth } from "../../contexts/AuthContext";

export function useBuilding(
  buildingType: "central" | "hydropolis" | "laboratory" | "farm" | "powerhouse"
) {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["building", buildingType],
    queryFn: () => getBuilding(user?.id as number, buildingType),
  });

  return { data, isLoading };
}
