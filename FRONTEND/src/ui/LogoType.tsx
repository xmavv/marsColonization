import styled from "styled-components";

const StyledLogoType = styled.div`
  display: inline-block;
  width: 80%;
`;

const Img = styled.img`
  width: 100%;
`;

function LogoType() {
  return (
    <StyledLogoType>
      <a target="_blank" href="https://www.textstudio.com/">
        <Img src="/logotype.png" alt="" />
      </a>
    </StyledLogoType>
  );
}

export default LogoType;
