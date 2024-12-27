import styled from "styled-components";
import Island from "../features/buildings/Island";
import LinkCard from "../ui/LinkCard";
import { Card3D } from "../ui/3dCard";
import { pageAnimation } from "../ui/pageAnimation";

import { motion } from "framer-motion";

const StyledStart = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;

const IslandWrapper = styled.div`
  grid-row: 1 / -1;
  width: 75%;
  justify-self: center;
`;

function Start() {
  return (
    <StyledStart {...pageAnimation}>
      <IslandWrapper>
        <Card3D width="full">
          <Island />
        </Card3D>
      </IslandWrapper>

      <Card3D>
        <LinkCard to="workers">WORKERS</LinkCard>
      </Card3D>

      <Card3D>
        <LinkCard to="tasks">TASKS</LinkCard>
      </Card3D>
    </StyledStart>
  );
}

export default Start;
