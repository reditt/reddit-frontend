import React from "react";
import Wrapper from "../../components/Wrapper";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as ImageLogo } from "../../assets/ImageLogo.svg";
import { ReactComponent as Link } from "../../assets/Link.svg";
import { ReactComponent as Cake } from "../../assets/cake.svg";
import CategoryTab from "../../components/CategoryTab";
const Community = () => {
  return (
    <>
      <div>
        <div className="flex flex-col">
          <div className="flex h-20 bg-gradient-to-r from-blue-300 to-blue-400 "></div>
          <div className="details p-2 pb-6 bg-white shadow-sm">
            <Wrapper className="relative flex">
              <div className="w-full flex flex-col sm:flex-row">
                <div className="w-full sm:w-auto ">
                  <img
                    className="  w-20 h-20 mx-auto  border-4 border-white rounded-full object-cover object-center -mt-10 sm:-mt-8 sm:w-24 sm:h-24"
                    src="https://assets.teenvogue.com/photos/59ca525c4ae64e5d63809461/16:9/w_2560%2Cc_limit/weeknd-lede.jpg"
                    alt="avatar"
                  />
                </div>
                <div className="flex px-2 w-full flex-col items-center justify-center sm:w-9/12 sm:items-start sm:justify-start sm:flex-row">
                  <div className="flex flex-col text-center sm:text-left ">
                    <h2 className="font-semibold md:text-lg">
                      Community name will be here
                    </h2>
                    <p className="text-sm text-gray-400">
                      community/communityname
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0 sm:ml-4 sm:flex ">
                    <button className="py-1 h-8 flex items-center justify-center w-24 rounded-full font-medium bg-black text-primary text-sm mx-auto">
                      Join
                    </button>
                    <button className="py-1 h-8 w-8 ml-4 items-center justify-center hidden rounded-full font-medium border-2 border-primary text-primary text-sm mx-auto sm:flex">
                      <Bell className="w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>
          {/* bottom */}
          <Wrapper>
            <div className="flex w-full mt-4 md:gap-2 md:px-4 lg:px-0">
              <div className="flex flex-col w-full md:w-seventy md:pr-4">
                <div className="p-2 rounded-xl w-11/12 mx-auto flex bg-white md:w-full ">
                  <img
                    src="https://assets.teenvogue.com/photos/59ca525c4ae64e5d63809461/16:9/w_2560%2Cc_limit/weeknd-lede.jpg"
                    className="h-10 w-10 rounded-full object-center object-cover"
                    alt="avatar"
                  />
                  <div className="flex items-center px-4 ml-2 rounded-lg w-full text-gray-400 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    Create Post
                  </div>
                  <div className="flex items-center ml-3 break-words cursor-pointer">
                    <ImageLogo className="w-7" />
                    <Link className="w-7 ml-3" />
                  </div>
                </div>
                <CategoryTab />
              </div>
              <div className="hidden md:flex w-thirty">
                <div className="w-full bg-white rounded-lg">
                  <div className="bg-primary flex p-2 font-medium text-white rounded-t-lg items-center justify-between">
                    <span>About Community</span>{" "}
                    <span className="cursor-pointer">•••</span>
                  </div>
                  <div className="text-xs text-gray-400 p-2">
                    A place for sharing videos, gifs, and images of animals
                    being bros.
                  </div>
                  <div className="flex w-full px-2 pb-2 ">
                    <div className="flex flex-col mr-10 ">
                      <p className="">4.5m</p>
                      <p className="text-xs font-semibold">Members</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="">400</p>
                      <p className="text-xs font-semibold">Online</p>
                    </div>
                  </div>
                  <div className="p-2 mb-3">
                    <p className="flex items-end text-sm">
                      <Cake className="mr-2 " />
                      Created Mar 15, 2013
                    </p>
                    <button className="py-1 h-7 w-full flex items-center justify-center mt-4 rounded-full font-medium bg-black text-primary text-sm mx-auto">
                      Create Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default Community;
