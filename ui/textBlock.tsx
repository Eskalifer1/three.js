import { Description, HalfOfScreen, Title } from "@/styles/ScreenParts";
import { FC } from "react";

interface PropsType {
  title: string;
  description: string;
}

const TextBlock: FC<PropsType> = ({ title, description }) => {
  return (
    <HalfOfScreen>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </HalfOfScreen>
  );
};

export default TextBlock;
