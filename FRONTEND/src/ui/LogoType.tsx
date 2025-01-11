import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogoType = styled.div`
  margin-bottom: 10rem;
`;

const Img = styled.img`
  width: 100%;
`;

function LogoType() {
  return (
    <StyledLogoType>
      <Link to="/homepage">
        <Img src="/logotype.png" alt="" />
      </Link>
    </StyledLogoType>
  );
}

export default LogoType;
