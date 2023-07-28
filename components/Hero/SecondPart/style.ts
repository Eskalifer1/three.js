"use client";

import Image from "next/image";
import { styled } from "styled-components";

export const AstronautImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 0px;
  width: 60%;
  margin-inline: auto;
  padding-bottom: 70%;

  transform: translate(-50%, -50%);

  @media only screen and (max-width: 768px) {
    width: 50%;
    padding-bottom: 60%;
  }

  @media only screen and (max-width: 540px) {
    width: 90%;
    padding-bottom: 100%;
  }
`;

export const AstronautImage = styled(Image)`
  animation: astronaut 2s infinite alternate;

  @keyframes astronaut {
    from {
      transform: translateY(-15px);
    }

    to {
      transform: translateY(15px);
    }
  }
`;
