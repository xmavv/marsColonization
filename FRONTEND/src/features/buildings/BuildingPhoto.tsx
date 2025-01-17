import { Card3D } from "../../ui/3dCard";

function BuildingPhoto({ buildingType }: { buildingType: string }) {
  return (
    <Card3D>
      <img
        src={`/buildings/${buildingType}.png`}
        alt={`photo of ${buildingType} building`}
      />
    </Card3D>
  );
}

export default BuildingPhoto;
