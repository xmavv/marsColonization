import styled from "styled-components";
import Resource from "../resources/Resource";
import { Button, CenterContainer } from "./BuildingInfo";
import { useWorkers } from "../workers/useWorkers";
import { useUpdateBuilding } from "./useUpdateBuilding";
import { Resources } from "../../services/apiResources";

const workersTypes = {
  central: "meteorologists",
  farm: "biologists",
  laboratory: "chemists",
  hydropolis: "hydrologists",
  powerhouse: "electricians",
};

const ButtonUpdate = styled(Button)`
  background-color: #21dc21;
  color: black;
`;

interface UpdateCost {
  ENERGY: number;
  WATER: number;
  FOOD: number;
  COINS: number;
  WORKERS: number;
}

function ButtonUpgrade({
  buildingType,
  resources,
  updateCost,
  level,
}: {
  buildingType: "central" | "hydropolis" | "laboratory" | "farm" | "powerhouse";
  resources: Resources;
  updateCost: UpdateCost;
  level: number;
}) {
  const { data: workers, isLoading: isLoadingWorkers } = useWorkers();
  const { updateBuilding, isPending: isUpdatingBuilding } =
    useUpdateBuilding(buildingType);

  const workerType = workersTypes[buildingType];

  function handleUpdateBuilding() {
    if (
      resources.energy >= updateCost.ENERGY &&
      resources.water >= updateCost.WATER &&
      resources.food >= updateCost.FOOD &&
      resources.coins >= updateCost.COINS &&
      workers[workerType] >= updateCost.WORKERS
    ) {
      updateBuilding(level + 1);
    } else {
      console.log("nie masz wystarczajaco resourcow!");
    }
  }

  return (
    <div>
      <CenterContainer>
        <Resource type="energy">{`${updateCost.ENERGY}`}</Resource>
        <Resource type="water">{`${updateCost.WATER}`}</Resource>
        <Resource type="food">{`${updateCost.FOOD}`}</Resource>
        <Resource type="workers">{`${updateCost.WORKERS}`}</Resource>
        <Resource type="coins">{`${updateCost.COINS}`}</Resource>
      </CenterContainer>
      <ButtonUpdate
        onClick={handleUpdateBuilding}
        disabled={isUpdatingBuilding || isLoadingWorkers}
      >
        upgrade
      </ButtonUpdate>
    </div>
  );
}

export default ButtonUpgrade;
