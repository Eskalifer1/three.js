import { Button } from "@/ui/button";
import Link from "next/link";
import { NavButtonSearch, NavButtonsContainer, SearchIcon } from "./style";

const NavButtons = () => {
  return (
    <NavButtonsContainer>
      <NavButtonSearch>
        <SearchIcon
          src="/image/search.png"
          alt="Search Icon"
          width={25}
          height={25}
          sizes="(min-width: 320px) 20px"
        />
      </NavButtonSearch>
      <Button>
        <Link href={"#contactUs"}>Contact me</Link>
      </Button>
    </NavButtonsContainer>
  );
};

export default NavButtons;
