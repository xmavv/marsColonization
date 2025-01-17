import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useBuilding } from "./useBuilding";
import Spinner from "../../ui/Spinner";
import { useResources } from "../resources/useResources";
import { useChangeTitle } from "../../hooks/useChangeTitle";
import BuildingPhoto from "./BuildingPhoto";
import BuildingDescription from "./BuildingDescription";
import ButtonUpgrade from "./ButtonUpgrade";
import ButtonClaim from "./ButtonClaim";
import OtherBuildings from "./OtherBuildings";
import { P } from "./BuildingUtils";

const CtaSection = styled.div`
  font-size: 1.7rem;

  > * {
    margin: 2rem;
  }
`;

function BuildingInfo() {
  const { buildingType } = useParams() as {
    buildingType:
      | "central"
      | "hydropolis"
      | "laboratory"
      | "farm"
      | "powerhouse";
  };

  const { data: resources, isLoading: isLoadingResources } = useResources();
  const { data: { data: building, updateCost, product } = {}, isLoading } =
    useBuilding(buildingType);

  useChangeTitle(buildingType);

  if (isLoading || isLoadingResources) return <Spinner />;

  return (
    <>
      <BuildingPhoto buildingType={buildingType} />
      <BuildingDescription level={building.level} buildingType={buildingType} />

      <CtaSection>
        <ButtonClaim
          buildingType={buildingType}
          resources={resources}
          product={product}
        />
        <ButtonUpgrade
          resources={resources}
          buildingType={buildingType}
          updateCost={updateCost}
          level={building.level}
        />
      </CtaSection>

      <div>
        <P>check other buildings</P>
        <OtherBuildings buildingType={buildingType} />
      </div>
    </>
  );
}

export default BuildingInfo;
