import styled from "styled-components";
import Worker from "../features/workers/Worker";
import ButtonGoBack from "../ui/ButtonGoBack";

const StyledWorkers = styled.div`
  background-image: linear-gradient(
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );

  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

function Workers() {
  return (
    <>
      <StyledWorkers>
        <Worker type="hydrologist" />
        <Worker type="chemist" />
        <Worker type="electrician" />
        <Worker type="biologist" />
        <Worker type="meteorologist" />
      </StyledWorkers>

      <ButtonGoBack />
    </>
  );
}

export default Workers;
