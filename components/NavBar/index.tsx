import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";
import { Nav } from "./style";

const NavBar = () => {
  return (
    <Nav>
      <NavLinks />
      <NavButtons />
    </Nav>
  );
};

export default NavBar;
