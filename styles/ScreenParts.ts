"use client";

import styled from "styled-components";

type HalfOfScreenPropsType = {
  $flex?: number;
  $none?: boolean;
};

export const HalfOfScreen = styled.div<HalfOfScreenPropsType>`
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    flex: ${(props) => props.$flex || 1};
    ${(props) => props.$none && "display: none;"}
  }
`;

export const Title = styled.h1`
  font-size: var(--step-4);
`;

export const Description = styled.p`
  font-size: var(--step-1);
`;

export const SecondTitle = styled.h2`
  font-size: var(--step-3);
`;
