import { HalfOfScreen } from "@/styles/ScreenParts";
import { WorkItems } from "@/utils/Arrays/WorkArrat";
import { FC } from "react";
import { WorkListItem, WorksList } from "./style";

interface PropsType {
  setSelectedItem: (string: string) => void;
}

const WorksFirstPart: FC<PropsType> = ({ setSelectedItem }) => {
  return (
    <HalfOfScreen>
      <WorksList>
        {WorkItems.map((item) => (
          <WorkListItem
            $text={item}
            key={item}
            onClick={() => setSelectedItem(item)}
          >
            {item}
          </WorkListItem>
        ))}
      </WorksList>
    </HalfOfScreen>
  );
};

export default WorksFirstPart;
