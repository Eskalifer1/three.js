import Atom from "@/components/3D-models/Atom";
import Illustration from "@/components/3D-models/Illustration";
import Mac from "@/components/3D-models/Mac";
import Shoe from "@/components/3D-models/Shoe";
import { HalfOfScreen } from "@/styles/ScreenParts";
import { FC } from "react";
import Model from "../../Model";

interface PropsType {
  selectedItem: string;
}

const WorksSecondPart: FC<PropsType> = ({ selectedItem }) => {
  return (
    <HalfOfScreen>
      {selectedItem === "Web Design" ? (
        <Model ModelComponent={<Mac />} />
      ) : selectedItem === "Development" ? (
        <Model ModelComponent={<Atom />} />
      ) : selectedItem === "Illustration" ? (
        <Model ModelComponent={<Illustration />} />
      ) : selectedItem === "Product Design" ? (
        <Model ModelComponent={<Shoe />} />
      ) : (
        <></>
      )}
    </HalfOfScreen>
  );
};

export default WorksSecondPart;
