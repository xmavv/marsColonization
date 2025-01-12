import styled from "styled-components";
import { formatDuration } from "../../utils/helpers";
import Resource, { Type } from "../resources/Resource";
import { useUpdateResources } from "../resources/useUpdateResources";
import { useGeneratingResources } from "../../hooks/useGeneratingResources";
import { Resources } from "../../services/apiResources";
import { Button, CenterContainer } from "./BuildingUtils";
import { Countdown } from "../../ui/Countdown";

const buildingsResources = {
  central: "temperature",
  farm: "food",
  laboratory: "oxygen",
  hydropolis: "water",
  powerhouse: "energy",
};

const buildingColors = {
  central: "#820000",
  hydropolis: "#346dff",
  laboratory: "#0099a4",
  farm: "#007a1d",
  powerhouse: "#983800",
};

const StyledButtonClaim = styled(Button)`
  position: relative;
  background-color: black;
  overflow: hidden;

  background-color: #4a4a4a;
  opacity: 0.8;
  background: repeating-linear-gradient(
    -45deg,
    #4a4a4a 1px,
    #4a4a4a 5px,
    #6c6c6c 6px,
    #6c6c6c 10px
  );
`;

interface Product {
  RESOURCE: number;
  TIME: number;
}

function ButtonClaim({
  buildingType,
  resources,
  product,
}: {
  resources: Resources;
  product: Product;
  buildingType: "central" | "hydropolis" | "laboratory" | "farm" | "powerhouse";
}) {
  const { updateResources, isPending: isUpdatingResources } =
    useUpdateResources();
  const { resourcesToClaim, resetGeneratingResources, countdown, duration } =
    useGeneratingResources(product.TIME, product.RESOURCE);

  const buildingResource = buildingsResources[buildingType] as Type;

  function handleClaimResource() {
    const resourcesToUpdate = {
      [buildingResource]: resources[buildingResource] + resourcesToClaim,
    };

    updateResources(resourcesToUpdate);
    resetGeneratingResources();
  }

  return (
    <div>
      <CenterContainer>
        <Resource type="duration">{formatDuration(duration)}</Resource>
      </CenterContainer>
      <StyledButtonClaim
        onClick={handleClaimResource}
        disabled={isUpdatingResources || resourcesToClaim === 0}
      >
        <Countdown
          countdown={countdown % 100}
          color={buildingColors[buildingType]}
        />
        <CenterContainer>
          <Resource type={buildingResource}>{`${resourcesToClaim}`}</Resource>
        </CenterContainer>
      </StyledButtonClaim>
    </div>
  );
}

export default ButtonClaim;
