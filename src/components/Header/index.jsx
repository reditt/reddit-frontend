import React from "react";
import { ReactComponent as Logo } from "../../assets/maddit.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
const Header = () => {
  return (
    <div className="w-full h-16 px-4 border-2 flex items-center border-black">
      <Logo className="h-10" />
      <div className="w-96">
     
      </div>
    </div>
  );
};

export default Header;
