import React from "react";
import './styles.scss'
import ButtonNav from "./ButtonNav";
import Logo from "./Logo";
import NavLink from "./NavLink";

type Props = {};

function NavBar(props: Props) {
  return (
    <div>
      <Logo />
      <NavLink />
      <ButtonNav />
    </div>
  );
}

export default NavBar;
