import styled from "styled-components";
import Resource from "./Resource";
import { useResources } from "./useResources";
import Spinner from "../../ui/Spinner";

const Ul = styled.ul`
  display: flex;
  gap: 2rem;
`;

function ResourcesList() {
  const { data: resources, isLoading } = useResources();

  if (isLoading) return <Spinner />;
  const { coins, energy, food, oxygen, temperature, water } = resources;

  return (
    <Ul>
      <li>
        <Resource type={"coins"}>{coins}</Resource>
      </li>
      <li>
        <Resource type={"energy"}>{energy}</Resource>
      </li>
      <li>
        <Resource type={"food"}>{food}</Resource>
      </li>
      <li>
        <Resource type={"water"}>{water}</Resource>
      </li>
      <li>
        <Resource type={"oxygen"}>{oxygen}</Resource>
      </li>
      <li>
        <Resource type={"temperature"}>{temperature}</Resource>
      </li>
    </Ul>
  );
}

export default ResourcesList;
