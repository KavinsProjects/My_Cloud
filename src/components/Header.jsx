import React from "react";
import Image from "next/image";
import logo from "../../public/drive_logo.png";

const Header = () => {
  return (
    <header>
      <Image src={logo} width={50} height={50} alt="Drive-logo" />
      <h1>ICloud</h1>
    </header>
  );
};

export default Header;
