import React from "react";
import { ReactComponent as Logo } from "../../assets/maddit.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
const Header = () => {
  return (
    <div className="w-full h-16 px-4 border-2 flex items-center shadow-sm">
      <Logo className="h-10" />
      <div className="w-96 h-8 bg-gray-100 flex items-center px-2 rounded-md">
        <Search />
        <input
          type="text"
          className="w-full bg-gray-100  outline-none  ml-2"
          name="search"
          placeholder="Search maddit"
        />
        <div>
          <button className="w-20 border-">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
