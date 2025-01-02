import styled from "styled-components";
import IconPlus from "../../ui/IconPlus";
import Resource from "../resources/Resource";
import { Quantity } from "../../ui/Quantity";

const StyledWorker = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 10fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  padding: 3rem 0;
  transition: all 0.3s ease;

  &:hover {
    > img {
      transform: translateY(-1.5rem);
    }

    > span {
      color: white;
    }

    background-color: rgba(224, 61, 246, 0.8);
    box-shadow: 0 1rem 5rem var(--color-primary);
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;

  font-size: 2rem;
  color: white;

  transition: transform 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.2);
  }
`;

const Img = styled.img`
  width: 80%;
  transition: transform 0.3s ease;
`;

const Name = styled.p`
  color: white;
  font-size: 2rem;
`;

interface WorkerProps {
  type:
    | "hydrologist"
    | "chemist"
    | "electrician"
    | "biologist"
    | "meteorologist";
}

function Worker({ type }: WorkerProps) {
  return (
    <StyledWorker>
      <Resource type="coins" size="2rem">
        $ 500
      </Resource>
      <Button>
        <IconPlus /> add
      </Button>
      <Img src={`/workers/${type}.png`} alt="" />
      <Name>{type}</Name>
      <Quantity color="var(--color-primary)" size="2rem">
        50
      </Quantity>
    </StyledWorker>
  );
}

export default Worker;
