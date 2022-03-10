import React from "react";
import "./styles.scss";
import ButtonNav from "./ButtonNav";
import Logo from "./Logo";
import NavLink from "./NavLink";

type Props = {};

function NavBar(props: Props) {
  return (
    <>
      <Logo />
      <NavLink />
      <ButtonNav />
    </>
  );
}

export default NavBar;
