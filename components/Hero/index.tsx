import { SectionContainer } from "@/styles/SectionContainer";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";

const HeroSection = () => {
  return (
    <SectionContainer id="home">
      <FirstPart />
      <SecondPart />
    </SectionContainer>
  );
};

export default HeroSection;
