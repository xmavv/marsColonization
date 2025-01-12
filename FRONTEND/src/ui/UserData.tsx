import styled from "styled-components";
import { useUser } from "../features/users/useUser";
import { Level } from "./Level";
import Spinner from "./Spinner";
import { Countdown } from "./Countdown";

const StyledUserData = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Nickname = styled.span`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: white;
`;

const LevelProgress = styled.div`
  position: relative;

  width: 10rem;
  height: 2rem;
  border-radius: 2rem;

  background-color: #4a4a4a;
  opacity: 0.8;
  background: repeating-linear-gradient(
    -45deg,
    #4a4a4a 1px,
    #4a4a4a 5px,
    #6c6c6c 6px,
    #6c6c6c 10px
  );

  overflow: hidden;
`;

function UserData() {
  const { data: user, isLoading: isLoading2 } = useUser();
  const level = Math.floor(user.level / 1000);
  const progress = Math.floor((user.level % 1000) / 10);

  if (isLoading2) return <Spinner />;

  return (
    <StyledUserData>
      <Nickname>{user.username}</Nickname>
      <Level>level {level}</Level>
      <LevelProgress>
        <Countdown countdown={progress} color="#3ada3f" />
      </LevelProgress>
    </StyledUserData>
  );
}

export default UserData;
