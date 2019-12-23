import React, { useContext } from "react";
//styles
import StyledSidebar from "./styles";
//adminlevel
import { Context } from "../../App";
import NavList from "../NavList/NavList";
import { Home, Assignment } from "@material-ui/icons";

const SideNav = () => {
  const { show } = useContext(Context);
  return (
    <>
      <StyledSidebar open={show}>
        <ul>
          <NavList link="/">
            <Home />
          </NavList>

          <NavList link="/tags">
            <Assignment />
          </NavList>
        </ul>
      </StyledSidebar>
    </>
  );
};

export default SideNav;
