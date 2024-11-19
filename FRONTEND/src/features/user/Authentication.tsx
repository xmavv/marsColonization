import styled from "styled-components";
import ButtonCta from "../../ui/ButtonCta";

const StyledAuthentication = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const UserData = styled.div`
  font-size: 1.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;

  color: var(--color-primary);
  border: 7px solid var(--color-primary);
  border-radius: var(--radius-small);
  background-color: var(--color-primary-bg);
  box-shadow: 0 1rem 5rem var(--color-primary);
`;

const Input = styled.input`
  font-family: "Krona One", sans-serif;

  padding: 1.5rem;
  margin: 2rem;
  width: 30rem;

  border-radius: var(--radius-small);
  border: 7px solid transparent;

  color: var(--color-complementary);
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--color-complementary);
  }

  &:focus {
    outline: none;
    border: 7px solid var(--color-primary);
  }
`;

const Label = styled.label`
  font-family: "Krona One", sans-serif;
`;

interface AuthenticationProps {
  children: string;
  onClick: () => void;
}

function Authentication({ children, onClick }: AuthenticationProps) {
  return (
    <StyledAuthentication>
      <UserData>
        <Label htmlFor="username">username</Label>
        <Input placeholder="e.g. xmavv" id="username" type="text" />

        <Label htmlFor="password">password</Label>
        <Input placeholder="e.g. 12345" id="password" type="text" />
      </UserData>

      <ButtonCta onClick={onClick}>{children}</ButtonCta>
    </StyledAuthentication>
  );
}

export default Authentication;
