import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/maddit.svg";
import { ReactComponent as Search } from "../../assets/search.svg";

const Header = () => {
  const Navigate = useHistory();

  // * local states
  const [search, setSearch] = useState("");

  // * function for handlechange search
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full h-16 px-4 border-2 flex items-center shadow-sm justify-between">
      <Logo className="h-10" />
      <div className="hidden h-8 sm:w-64 sm:flex px-2 md:w-96 md:flex lg:w-searchbar lg:h-8 bg-gray-100 lg:flex items-center lg:px-2 rounded-md">
        <Search />
        <input
          type="text"
          className="w-full bg-gray-100  outline-none  ml-2"
          name="search"
          placeholder="Search maddit"
          onChange={handleSearch}
        />
      </div>
      <div className="flex">
        <button
          onClick={() => Navigate.push("/signup")}
          className="w-20 bg-primary text-white font-medium px-2 py-1 rounded-md mr-4"
        >
          Signup
        </button>
        <button
          onClick={() => Navigate.push("/login")}
          className="w-20 border-2 border-primary px-2 py-1 font-medium rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
