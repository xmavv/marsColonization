import styled from "styled-components";
import Worker from "../features/workers/Worker";

const StyledWorkers = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

function Workers() {
  return (
    <StyledWorkers>
      <Worker type="hydrologist" />
      <Worker type="chemist" />
      <Worker type="electrician" />
      <Worker type="biologist" />
      <Worker type="meteorologist" />
    </StyledWorkers>
  );
}

export default Workers;
