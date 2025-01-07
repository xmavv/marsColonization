import styled from "styled-components";
import { capitalizeName } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { CenterContainer, P } from "./BuildingUtils";

const StyledOtherBuildings = styled.div`
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

const buildingTypes = [
  "central",
  "hydropolis",
  "laboratory",
  "farm",
  "powerhouse",
];

function OtherBuildings({
  buildingType,
}: {
  buildingType: "central" | "hydropolis" | "laboratory" | "farm" | "powerhouse";
}) {
  const buildings = buildingTypes.filter(
    (building) => building !== buildingType
  );

  return (
    <StyledOtherBuildings>
      {buildings.map((building) => (
        <OtherBuilding key={building}>
          <Link to={`/app/building/${building}`}>
            <img
              src={`/buildings/${building}.png`}
              alt={`photo of ${building} building`}
            />
          </Link>
          <CenterContainer>
            <P>{capitalizeName(building)}</P>
          </CenterContainer>
        </OtherBuilding>
      ))}
    </StyledOtherBuildings>
  );
}

export default OtherBuildings;
