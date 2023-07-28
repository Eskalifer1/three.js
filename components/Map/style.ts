"use client";

import { ComposableMap } from "react-simple-maps";
import { styled } from "styled-components";

export const ComposableOwnMap = styled(ComposableMap)`
  width: 100%;
  height: 100%;
`;

export const MapWrap = styled.div`
  height: 100vh;
  overflow: hidden;
  margin: calc(var(--step-3) * -1) calc(var(--step-3) * -1)
    calc(var(--step-3) * -1) 0;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
