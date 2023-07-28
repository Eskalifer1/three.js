"use client";

import { SecondTitle } from "@/styles/ScreenParts";
import { Button } from "@/ui/button";
import { styled } from "styled-components";

export const ContactUsForm = styled.form`
  margin-inline: auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${Button} {
    margin-top: 20px;
    margin-left: 0px;
    width: 100%;
  }

  ${SecondTitle} {
    text-align: center;
  }
`;
