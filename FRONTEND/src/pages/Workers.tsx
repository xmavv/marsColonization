import styled from "styled-components";
import WorkersList from "../features/workers/WorkersList";
import ButtonGoBack from "../ui/ButtonGoBack";
import { pageAnimation } from "../ui/pageAnimation";

import { motion } from "framer-motion";

const StyledWorkers = styled.div`
  background-image: linear-gradient(
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );

  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

function Workers() {
  return (
    <motion.div {...pageAnimation}>
      <StyledWorkers>
        <WorkersList />
      </StyledWorkers>

      <ButtonGoBack />
    </motion.div>
  );
}

export default Workers;
