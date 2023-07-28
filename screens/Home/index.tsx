import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/Hero";
import IntroduceSection from "@/components/Introduce";
import WorksSection from "@/components/Works";
import { MainContainer } from "./style";

const HomeScreen = () => {
  return (
    <MainContainer>
      <HeroSection />
      <IntroduceSection />
      <WorksSection />
      <ContactUs />
    </MainContainer>
  );
};

export default HomeScreen;
