import styled from "styled-components";
import { formatDuration } from "../../utils/helpers";
import Resource, { Type } from "../resources/Resource";
import { Button, CenterContainer } from "./BuildingInfo";
import { useUpdateResources } from "../resources/useUpdateResources";
import { useGeneratingResources } from "../../hooks/useGeneratingResources";
import { Resources } from "../../services/apiResources";

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

const Countdown = styled.div<{ duration: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.color};

  /* animation: ${resourcesCountdown} ${(props) => `${props.duration}s`} */
  /* ${CLAIM_RESOURCES_COUNTER} linear; */
`;

const StyledButtonClaim = styled(Button)`
  position: relative;
  background-color: black;
  overflow: hidden;
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

  const buildingResource = buildingsResources[buildingType] as Type;

  function handleClaimResource() {
    const resourcesToUpdate = {
      [buildingResource]: resources[buildingResource],
    };

    updateResources(resourcesToUpdate);
  }

  //   useGeneratingResources(product?.TIME, interval, setInterval);

  return (
    <div>
      <CenterContainer>
        <Resource type="duration">{formatDuration(product.TIME)}</Resource>
      </CenterContainer>
      <StyledButtonClaim
        onClick={handleClaimResource}
        // disabled={isUpdatingResources ||  < product.TIME}
      >
        <Countdown
          duration={product.TIME}
          color={buildingColors[buildingType]}
        />
        <CenterContainer>
          <Resource type={buildingResource}>{`${2}`}</Resource>
        </CenterContainer>
      </StyledButtonClaim>
    </div>
  );
}

export default ButtonClaim;
