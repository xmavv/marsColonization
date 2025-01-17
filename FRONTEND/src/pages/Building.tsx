import styled from "styled-components";
import ButtonGoBack from "../ui/ButtonGoBack";
import { pageAnimation } from "../ui/pageAnimation";

import { motion } from "framer-motion";
import BuildingInfo from "../features/buildings/BuildingInfo";

const StyledBuilding = styled.div`
  font-size: 2.5rem;
  font-family: "Kumar one", sans-serif;
  color: white;

  display: grid;
  grid-template-columns: 6fr 11fr;
  grid-template-rows: min-content min-content;
  grid-column-gap: 10rem;
  align-items: center;

  padding: 2rem 20rem;
`;

function Building() {
  return (
    <motion.div {...pageAnimation}>
      <StyledBuilding>
        <BuildingInfo />
      </StyledBuilding>

      <ButtonGoBack />
    </motion.div>
  );
}

export default Building;
