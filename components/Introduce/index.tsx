import { SectionContainer } from "@/styles/SectionContainer";
import IntroduceFirstPart from "./IntroduceFirstPart/idex";
import IntroduceSecondPart from "./IntroduceSecondPart/idex";

const IntroduceSection = () => {
  return (
    <SectionContainer id="introduce">
      <IntroduceFirstPart />
      <IntroduceSecondPart />
    </SectionContainer>
  );
};

export default IntroduceSection;
