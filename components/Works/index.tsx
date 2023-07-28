"use client";

import { SectionContainer } from "@/styles/SectionContainer";
import { useState } from "react";
import WorksFirstPart from "./WorksFirstPart";
import WorksSecondPart from "./WorksSecondPart";

const WorksSection = () => {
  const [selectedItem, setSelectedItem] = useState("Web Design");

  return (
    <SectionContainer id="works">
      <WorksFirstPart setSelectedItem={setSelectedItem} />
      <WorksSecondPart selectedItem={selectedItem} />
    </SectionContainer>
  );
};

export default WorksSection;
