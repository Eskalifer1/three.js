"use client";

import { styled } from "styled-components";

export const SectionContainer = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--step-3);

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
