import { Link, useParams } from "react-router-dom";
import { Level } from "../../ui/Level";
import Resource, { Type } from "../resources/Resource";
import { Card3D } from "../../ui/3dCard";
import { capitalizeName, formatDuration } from "../../utils/helpers";
import styled from "styled-components";
import { useBuilding } from "./useBuilding";
import Spinner from "../../ui/Spinner";
import { useUpdateResources } from "../resources/useUpdateResources";
import { useUpdateBuilding } from "./useUpdateBuilding";
import { useResources } from "../resources/useResources";
import { useWorkers } from "../workers/useWorkers";
import { useEffect, useRef, useState } from "react";
import { useGeneratingResources } from "../../hooks/useGeneratingResources";
import { useChangeTitle } from "../../hooks/useChangeTitle";

const buildingTypes = [
  "central",
  "hydropolis",
  "laboratory",
  "farm",
  "powerhouse",
];

const buildingsDescriptions = {
  central:
    "The Central building serves as the heart of the Mars colony, providing advanced climate regulation systems to counteract the harsh Martian temperatures. Equipped with state-of-the-art cooling towers and thermal shields, it allows settlers to lower the ambient temperature to more habitable levels. As the Central building upgrades, its efficiency in reducing temperatures improves, enabling further expansion and survival in the hostile Martian environment.",
  farm: "The Farm is the lifeline of the colony, responsible for producing vital food supplies. Using advanced hydroponics and Martian soil adaptations, it cultivates crops in a controlled environment. As the Farm levels up, it becomes more efficient, yielding larger quantities of fresh food to sustain the growing population. Its ability to maximize food production is crucial for maintaining colony morale and survival.",
  laboratory:
    "The Laboratory is the colony’s oxygen production center, equipped with cutting-edge chemical reactors to split carbon dioxide into breathable oxygen. It also serves as a hub for scientific advancements. Upgrading the Laboratory enhances its oxygen production capacity, enabling settlers to expand their habitats and sustain life in larger numbers. Its role is vital for long-term survival on Mars.",
  hydropolis:
    "Hydropolis is the colony's water processing hub, utilizing advanced filtration and condensation technology to extract water from Martian soil and atmosphere. This essential resource supports hydration, agriculture, and industrial processes. Higher levels of Hydropolis significantly increase water production, ensuring a steady supply for the expanding colony and safeguarding against resource shortages.",
  powerhouse:
    "The Powerhouse generates and distributes energy to power the colony's systems and operations. Using solar panels and geothermal energy converters, it ensures sustainable energy production even in the harsh Martian environment. As the Powerhouse is upgraded, its energy output grows, supporting larger structures and more advanced technologies, enabling the colony's continued growth and resilience.",
};

const buildingsResources = {
  central: "temperature",
  farm: "food",
  laboratory: "oxygen",
  hydropolis: "water",
  powerhouse: "energy",
};

const workersTypes = {
  central: "meteorologists",
  farm: "biologists",
  laboratory: "chemists",
  hydropolis: "hydrologists",
  powerhouse: "electricians",
};

const ImgBuilding = styled.img``;

const P = styled.p`
  font-size: 2rem;
  padding: 1rem;
`;

const OtherBuildings = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  &:has(div:hover) > div:not(:hover) {
    transform: scale(80%);
  }

  &:has(div:hover) div {
    transform: scale(110%);
  }
`;

const OtherBuilding = styled.div`
  transition: transform 0.3s ease;
`;

const Info = styled.div``;

const CtaSection = styled.div`
  font-size: 1.7rem;

  > * {
    margin: 2rem;
  }
`;

const Name = styled.h3`
  font-size: 4rem;
`;

const Description = styled.div`
  font-size: 1.5rem;
  font-family: "Krona One", sans-serif;
`;

const Button = styled.button`
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

const ButtonClaim = styled(Button)`
  background-color: black;
`;

const ButtonUpdate = styled(Button)`
  background-color: #21dc21;
  color: black;
`;

const CenterContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;

  transition: transform 0.3s ease;
`;
function BuildingInfo() {
  const [interval, setInterval] = useState(0);

  //static info
  const { buildingType } = useParams() as {
    buildingType:
      | "central"
      | "hydropolis"
      | "laboratory"
      | "farm"
      | "powerhouse";
  };

  const capitalizedBuildingType = capitalizeName(buildingType);
  const buildingDescription = buildingsDescriptions[buildingType];
  const buildingResource = buildingsResources[buildingType] as Type;
  const workerType = workersTypes[buildingType];

  const otherBuildings = buildingTypes.filter(
    (building) => building !== buildingType
  );

  //database info
  const { data: resources, isLoading: isLoadingResources } = useResources();
  const { data: workers, isLoading: isLoadingWorkers } = useWorkers();

  const { data: { data: building, updateCost, product } = {}, isLoading } =
    useBuilding(buildingType);
  const { updateResources, isPending: isUpdatingResources } =
    useUpdateResources();
  const { updateBuilding, isPending: isUpdatingBuilding } =
    useUpdateBuilding(buildingType);

  const resourcesToClaim = (product?.RESOURCE * interval) / product?.TIME || 0;

  //handler functions
  function handleClaimResource() {
    const resourcesToUpdate = {
      [buildingResource]: resources[buildingResource] + resourcesToClaim,
    };

    updateResources(resourcesToUpdate);
  }

  function handleUpdateBuilding() {
    if (
      resources.energy >= updateCost.ENERGY &&
      resources.water >= updateCost.WATER &&
      resources.food >= updateCost.FOOD &&
      resources.coins >= updateCost.COINS &&
      workers[workerType] >= updateCost.WORKERS
    ) {
      updateBuilding(building.level + 1);
    } else {
      console.log("nie masz wystarczajaco resourcow!");
    }
  }

  //hooks
  useChangeTitle(buildingType);
  useGeneratingResources(product?.TIME, interval, setInterval);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Card3D>
        <ImgBuilding
          src={`/buildings/${buildingType}.png`}
          alt={`photo of ${buildingType} building`}
        />
      </Card3D>

      <Info>
        <div>
          <Level color="var(--color-complementary)">
            level {building.level}
          </Level>
        </div>
        <Name>{capitalizedBuildingType}</Name>
        <Description>{buildingDescription}</Description>
      </Info>
      <CtaSection>
        <div>
          <CenterContainer>
            <Resource type="duration">{formatDuration(product.TIME)}</Resource>
          </CenterContainer>
          <ButtonClaim
            onClick={handleClaimResource}
            disabled={isUpdatingResources || interval < product.TIME}
          >
            <CenterContainer>
              <Resource type={buildingResource}>
                {`${resourcesToClaim}`}
              </Resource>
            </CenterContainer>
          </ButtonClaim>
        </div>

        <div>
          <CenterContainer>
            <Resource type="energy">{updateCost.ENERGY}</Resource>
            <Resource type="water">{updateCost.WATER}</Resource>
            <Resource type="food">{updateCost.FOOD}</Resource>
            <Resource type="workers">{updateCost.WORKERS}</Resource>
            <Resource type="coins">{updateCost.COINS}</Resource>
          </CenterContainer>
          <ButtonUpdate
            onClick={handleUpdateBuilding}
            disabled={isUpdatingBuilding}
          >
            upgrade
          </ButtonUpdate>
        </div>
      </CtaSection>

      <div>
        <P>check other buildings</P>

        <OtherBuildings>
          {otherBuildings.map((building) => (
            <OtherBuilding key={building}>
              <Link to={`/app/building/${building}`}>
                <ImgBuilding
                  src={`/buildings/${building}.png`}
                  alt={`photo of ${building} building`}
                />
              </Link>
              <CenterContainer>
                <P>{capitalizeName(building)}</P>
              </CenterContainer>
            </OtherBuilding>
          ))}
        </OtherBuildings>
      </div>
    </>
  );
}

export default BuildingInfo;
