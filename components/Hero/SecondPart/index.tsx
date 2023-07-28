import { HalfOfScreen } from "@/styles/ScreenParts";
import OwnSphere from "./Sphere";
import { AstronautImage, AstronautImageContainer } from "./style";

const SecondPart = () => {
  return (
    <HalfOfScreen $flex={2}>
      <OwnSphere color="#5e2d83" />
      <AstronautImageContainer>
        <AstronautImage
          src="/image/moon.png"
          alt="Astronaut"
          fill
          priority
          quality={100}
          sizes="(min-width: 320px) 50vw"
        />
      </AstronautImageContainer>
    </HalfOfScreen>
  );
};

export default SecondPart;
