"use client";

import { styled } from "styled-components";

type WorkListItem = {
  $text: string;
};

export const WorksList = styled.ul`
  margin-inline-start: var(--step-3);
`;

export const WorkListItem = styled.li<WorkListItem>`
  font-size: var(--step-5);
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  white-space: nowrap;
  
  &::after {
    content: "${(props) => props.$text}";
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    width: 0%;
    white-space: nowrap;
    overflow: hidden;
    color: var(--second-color);
  }
  &:hover {
    &::after {
      animation: animateText 1s linear alternate both;
      @keyframes animateText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
