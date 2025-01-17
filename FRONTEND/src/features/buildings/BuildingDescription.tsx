import styled from "styled-components";
import { Level } from "../../ui/Level";
import { capitalizeName } from "../../utils/helpers";

const buildingsDescriptions = {
  central:
    "The Central building serves as the heart of the Mars colony, providing advanced climate regulation systems to counteract the harsh Martian temperatures. Equipped with state-of-the-art cooling towers and thermal shields, it allows settlers to lower the ambient temperature to more habitable levels. As the Central building upgrades, its efficiency in reducing temperatures improves, enabling further expansion and survival in the hostile Martian environment.",
  farm: "The Farm is the lifeline of the colony, responsible for producing vital food supplies. Using advanced hydroponics and Martian soil adaptations, it cultivates crops in a controlled environment. As the Farm levels up, it becomes more efficient, yielding larger quantities of fresh food to sustain the growing population. Its ability to maximize food production is crucial for maintaining colony morale and survival.",
  laboratory:
    "The Laboratory is the colony’s oxygen production center, equipped with cutting-edge chemical reactors to split carbon dioxide into breathable oxygen. It also serves as a hub for scientific advancements. Upgrading the Laboratory enhances its oxygen production capacity, enabling settlers to expand their habitats and sustain life in larger numbers. Its role is vital for long-term survival on Mars.",
  hydropolis:
    "Hydropolis is the colony's water processing hub, utilizing advanced filtration and condensation technology to extract water from Martian soil and atmosphere. This essential resource supports hydration, agriculture, and industrial processes. Higher levels of Hydropolis significantly increase water production, ensuring a steady supply for the expanding colony and safeguarding against resource shortages.",
  powerhouse:
    "The Powerhouse generates and distributes energy to power the colony's systems and operations. Using solar panels and geothermal energy converters, it ensures sustainable energy production even in the harsh Martian environment. As the Powerhouse is upgraded, its energy output grows, supporting larger structures and more advanced technologies, enabling the colony's continued growth and resilience.",
};

const Name = styled.h3`
  font-size: 4rem;
`;

const Description = styled.div`
  font-size: 1.5rem;
  font-family: "Krona One", sans-serif;
`;

function BuildingDescription({
  buildingType,
  level,
}: {
  buildingType: "central" | "hydropolis" | "laboratory" | "farm" | "powerhouse";
  level: number;
}) {
  const capitalizedBuildingType = capitalizeName(buildingType);
  const buildingDescription = buildingsDescriptions[buildingType];

  return (
    <div>
      <div>
        <Level color="var(--color-complementary)">level {level}</Level>
      </div>
      <Name>{capitalizedBuildingType}</Name>
      <Description>{buildingDescription}</Description>
    </div>
  );
}

export default BuildingDescription;
