import styled from "styled-components";
import Resource from "../resources/Resource";
import { useWorkers } from "../workers/useWorkers";
import { useUpdateBuilding } from "./useUpdateBuilding";
import { Resources } from "../../services/apiResources";
import { Button, CenterContainer } from "./BuildingUtils";
import { toast } from "react-toastify";

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
  const { data: { data: workers } = {}, isLoading: isLoadingWorkers } =
    useWorkers();
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
      //tez moze musi byc ze jak upgrade budynku to od nowa sie laduja resourcy w buttonClaim

      updateBuilding(level + 1);
      toast.success("you successfully upgraded the building!", {
        theme: "colored",
      });
    } else toast.error("not enought resources!", { theme: "colored" });
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
