import styled from "styled-components";
import Island from "../features/buildings/Island";
import LinkCard from "../ui/LinkCard";

const StyledStart = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
`;

const IslandWrapper = styled.div`
    grid-row: 1 / -1;
    width: 75%;
    justify-self: center;
`

function Start() {
    return <StyledStart>
        <IslandWrapper>
            <Island />
        </IslandWrapper>

        <LinkCard to="/workers">WORKERS</LinkCard>
        <LinkCard to="/tasks">TASKS</LinkCard>
        
        </StyledStart>
}

export default Start;