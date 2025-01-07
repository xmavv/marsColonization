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

export const P = styled.p`
  font-size: 2rem;
  padding: 1rem;
`;

const CtaSection = styled.div`
  font-size: 1.7rem;

  > * {
    margin: 2rem;
  }
`;

export const Button = styled.button`
  font-family: "Krona One", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;

  width: 100%;
  padding: 1rem 3rem;
  margin-top: 1.5rem;
  border-radius: 4rem;

  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.07);
  }
`;

export const CenterContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  justify-content: center;

  z-index: 10;
  transition: transform 0.3s ease;
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
