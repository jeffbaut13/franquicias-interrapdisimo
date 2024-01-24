import React from "react";
import { Link } from "react-router-dom";
import { IconHome } from "./IconHome";
import { IconBack } from "./IconBack";
import { useNavigate } from "react-router-dom";
import { Prospero } from "./Prospero";

const Nav = () => {
  const UseNavi = useNavigate();
  return (
    <nav className="flex-row-btwen navbar absolute top-8 px-6 w-full">
      <IconBack handleclick={() => UseNavi(-1)} color={"#ffffff"} />
      <Prospero color={"#ffffff"} />
      <Link to={`/`}>
        <IconHome color={"#ffffff"} />
      </Link>
    </nav>
  );
};

export default Nav;
