"use client";

import Link from "next/link";
import { styled } from "styled-components";

export const NavLinksContainer = styled.div`
  display: flex;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin-inline-start: 15px;

  :hover {
    color: var(--second-color);
  }
`;

export const NavLink = styled(Link)`
  padding-inline: 10px;
  transition: color 0.2s;

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;
