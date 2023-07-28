"use client";

import { styled } from "styled-components";

export const MainContainer = styled.main`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./image/bg.jpeg");
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;
