import styled from "styled-components";
import ButtonGoBack from "../ui/ButtonGoBack";
import { useParams } from "react-router-dom";
import { Level } from "../ui/Level";
import Resource from "../ui/Resource";

const StyledBuilding = styled.div`
  font-size: 2.5rem;
  font-family: 'Kumar one', sans-serif;

  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 3rem;

  padding: 5rem;
`

const ImgBuilding = styled.img`
  grid-row: 1 / -1;
`

const Info = styled.div`
  
`

const CtaSection = styled.div`
  font-size: 1.7rem;

  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  grid-row: 3 / -1;
`

const Name = styled.h3`
  font-size: 4rem;
  color: white;
`

const Description = styled.div`
font-size: 1.5rem;
  font-family: "Krona One", sans-serif;
  color: white;
`

const Button = styled.button`
  font-family: "Krona One", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;

  width: 100%;
  padding: 1rem 3rem;
  margin-top: 1.5rem;
  border-radius: 4rem;
`

const ButtonClaim = styled(Button)`
  background-color: black;
`

const ButtonUpdate = styled(Button)`
  background-color: #21dc21;
` 

const ResourcesContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`

function Building() {
  // const buildingType = useParams();
  const buildingType = 'central';

  return (
    <>
      <StyledBuilding>
        <ImgBuilding src={`/buildings/${buildingType}.png`} alt={`photo of ${buildingType} building`} />

        <Info>
          <div>
            <Level color="var(--color-complementary)">level 1</Level>
          </div>
          <Name>Central</Name>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum</Description>
        </Info>
        <CtaSection>
          <div>
            <ResourcesContainer>
              <Resource type="duration">1min</Resource>
            </ResourcesContainer>
            <ButtonClaim><Resource type="energy">300</Resource></ButtonClaim>
          </div>

          <div>
            <ResourcesContainer>
              <Resource type="energy">505</Resource>
              <Resource type="water">252</Resource>
              <Resource type="food">23</Resource>
              <Resource type="workers">5</Resource>
              <Resource type="coins">500</Resource>
            </ResourcesContainer>
            <ButtonUpdate>update</ButtonUpdate>
          </div>
        </CtaSection>
      </StyledBuilding>

      <ButtonGoBack />
    </>
  );
}

export default Building;
