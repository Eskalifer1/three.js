"use client";

import { styled } from "styled-components";

export const Input = styled.input`
  border-radius: 6px;
  padding: 16px;
  margin-top: 20px;
  outline: none;
  border: none;
`;

export const InputErrorText = styled.p`
  color: red;
  margin-top: 5px;
  font-size: var(--step--1);
  letter-spacing: 1px;
`;
