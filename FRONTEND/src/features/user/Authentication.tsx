import styled from "styled-components";
import ButtonCta from "../../ui/ButtonCta";

const UserData = styled.div`
  font-size: 1.5rem;
  width: 35rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  position: relative;
  padding: 4rem 2rem;
  margin-bottom: 2rem;

  color: black;
  background-image: linear-gradient(
    var(--color-primary),
    var(--color-primary-2)
  );
  box-shadow: 0 1rem 5rem var(--color-primary);

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: var(--color-complementary);
  }

  &::before {
    bottom: -1rem;
    left: 6px;

    width: 100%;
    height: 1rem;

    transform: skewX(45deg);
  }

  &::after {
    top: 7px;
    right: -1rem;

    width: 1rem;
    height: 100%;

    transform: skewY(45deg);
  }
`;

const Input = styled.input`
  font-family: "Krona One", sans-serif;
  display: block;

  padding: 1.5rem;
  margin: 2rem;
  width: 30rem;

  color: var(--color-complementary);
  background-color: rgba(0, 0, 0, 0.5);
  border: 7px solid transparent;

  transition: all 0.3s ease;

  &::placeholder {
    color: black;
  }

  &:focus {
    outline: none;
    border: 7px solid var(--color-complementary);
  }
`;

const Label = styled.label`
  margin-left: 2rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Krona One", sans-serif;
  text-transform: uppercase;
`;

interface AuthenticationProps {
  children: string;
  onClick: () => void;
}

function Authentication({ children, onClick }: AuthenticationProps) {
  return (
    <form>
      <UserData>
        <div>
          <Label htmlFor="username">username</Label>
          <Input placeholder="e.g. xmavv" id="username" type="text" />
        </div>

        <div>
          <Label htmlFor="password">password</Label>
          <Input placeholder="e.g. admin' OR '1'='1 :)" id="password" type="password" />
        </div>
      </UserData>

      <ButtonCta rotate="0deg" onClick={onClick}>
        {children}
      </ButtonCta>
    </form>
  );
}

export default Authentication;
