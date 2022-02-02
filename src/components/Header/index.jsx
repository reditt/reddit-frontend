import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/maddit.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Drop } from "../../assets/dropdown.svg";
import { ReactComponent as Dropinvert } from "../../assets/invertdropdown.svg";
import { feeds, create } from "../../constants/navigation.constant";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import medditlogo1 from "../../assets/medditlogo1.png";
import useOutsideAlerter from "../../utils/outsideClick.utils";
import MenuDrop from "../MenuDrop";
import ProfileMenu from "../MenuDrop/ProfileMenu";
import CommunityModal from "../CommunityModal";

const Header = () => {
  const Navigate = useHistory();
  const Location = useLocation();
  const wrapperRef = useRef(null);
  const wrapperRef2 = useRef(null);

  // * LOCAL STATES
  const [search, setSearch] = useState("");
  const [isopenmenu, setIsopenmenu] = useState(false);
  const [isopenmenu2, setIsopenmenu2] = useState(false);
  const [indexForHead, setIndexForHead] = useState({
    indexCreate: {},
    indexFeed: {},
  });

  // * DATA FROM REDUX STORE
  const user = useSelector((state) => state.userReducer.userData);
  const isOpenCommunityModal = useSelector(
    (state) => state.modalReducer.communityModal
  );

  // * REFS FOR OUTSIDE CLICK DETECTION
  useOutsideAlerter(wrapperRef, setIsopenmenu);
  useOutsideAlerter(wrapperRef2, setIsopenmenu2);

  // *USE EFFECTS FOR SET ACTIVETAB
  useEffect(() => {
    const indexCreate = create.find((item) => item.Route === Location.pathname);
    const indexFeed = feeds.find((item) => item.Route === Location.pathname);

    setIndexForHead({
      indexCreate: indexCreate ? indexCreate : undefined,
      indexFeed: indexFeed ? indexFeed : undefined,
    });
  }, [Location.pathname]);

  // * HANDLECHANGE FOR SEARCH
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  // * CONDITIONAL HEADER
  return !user && !user?.id ? (
    <div className="w-full h-12 px-4 border-2 flex items-center shadow-sm justify-between z-20 bg-white">
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
  ) : (
    <>
      <div className="w-full h-14 px-2 border-2 flex items-center shadow-sm sticky top-0 z-20 bg-white">
        <Logo
          onClick={() => {
            Navigate.push("/");
          }}
          className="h-9 cursor-pointer"
        />
        <div
          ref={wrapperRef}
          onClick={() => {
            setIsopenmenu(true);
          }}
          className={`hidden relative sm:flex sm:ml-2 items-center sm:w-44 hover:bg-gray-50 sm:h-8 sm:rounded-md`}
        >
          <button
            onClick={() => {
              setTimeout(() => {
                setIsopenmenu(!isopenmenu);
              }, 0);
            }}
            className="sm:px-1 flex w-full items-center justify-between"
          >
            <span className="flex text-sm items-end">
              {indexForHead?.indexCreate?.Icon ? (
                <>
                  <indexForHead.indexCreate.Icon className="w-4 mr-1" />
                  {indexForHead?.indexCreate?.Label}
                </>
              ) : indexForHead?.indexFeed?.Icon ? (
                <>
                  <indexForHead.indexFeed.Icon className="w-4 mr-1" />
                  {indexForHead?.indexFeed?.Label}
                </>
              ) : (
                "null"
              )}
            </span>
            {!isopenmenu ? (
              <Drop className="w-4" />
            ) : (
              <Dropinvert className="w-4" />
            )}
          </button>
          {isopenmenu ? <MenuDrop setIsopenmenu={setIsopenmenu} /> : null}
        </div>
        <div className="hidden px-2 h-8 sm:ml-4 sm:w-46 sm:flex md:w-72 md:flex lg:w-96 lg:h-8 bg-gray-100 lg:flex items-center lg:px-2 rounded-md xl:ml-20">
          <Search />
          <input
            type="text"
            className="w-full bg-gray-100  outline-none  ml-2"
            name="search"
            placeholder="Search maddit"
            onChange={handleSearch}
          />
        </div>
        <div
          ref={wrapperRef2}
          onClick={() => {
            setIsopenmenu2(true);
          }}
          className=" flex items-center  rounded-md absolute right-6 cursor-pointer"
        >
          <div className="flex items-center  px-1  cursor-pointer">
            <div className="w-7 h-7 rounded-full ">
              <img
                className="w-full h-full rounded-full object-cover object-center"
                src={user?.profilePhoto || medditlogo1}
                alt="user"
              />
            </div>
            <div className="hidden items-center mx-1 xl:flex">
              <p className="text-xs ">{user?.name}</p>
            </div>
            {!isopenmenu2 ? (
              <Drop className="w-4" />
            ) : (
              <Dropinvert className="w-4" />
            )}
          </div>
          {isopenmenu2 ? <ProfileMenu setIsopenmenu2={setIsopenmenu2} /> : null}
        </div>
      </div>
      {isOpenCommunityModal ? <CommunityModal /> : null}
    </>
  );
};

export default Header;
