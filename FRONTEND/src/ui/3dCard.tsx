import { CardBody, CardContainer } from "./../../@/components/ui/3d-card";

interface Card3DProps {
  children: React.ReactNode;
  width?: string;
}

export function Card3D({ children, width = "auto" }: Card3DProps) {
  return (
    <CardContainer className={`inter-var w-${width}`}>
      <CardBody className={`relative group/card w-${width}`}>
        {children}
      </CardBody>
    </CardContainer>
  );
}
