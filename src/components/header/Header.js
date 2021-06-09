import React, { useState, useRef } from "react";
import { useContext } from "react";
// import { Link } from "react-router-dom";
import useOnClickOutside from "../../hooks/UseOnClickOutside";
import UserContext from "../Context/UserContext";
import HeaderAfterLogin from "./HeaderAfterLogin";
import HeaderBeforeLogin from "./HeaderBeforeLogin";

function Header() {
  let context = useContext(UserContext);

  return context.user ? <HeaderAfterLogin /> : <HeaderBeforeLogin />;
}

export default Header;
