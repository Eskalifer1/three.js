import Image from "next/image";
import { Links, NavLink, NavLinksContainer } from "./style";

const NavLinks = () => {
  return (
    <NavLinksContainer>
      <Image
        src="/image/logo.png"
        width={70}
        height={50}
        alt="Logo"
        sizes="(min-width: 320px) 70px"
        quality={100}
        priority
      />
      <Links>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#introduce">Introduce</NavLink>
        <NavLink href="#works">Works</NavLink>
      </Links>
    </NavLinksContainer>
  );
};

export default NavLinks;
