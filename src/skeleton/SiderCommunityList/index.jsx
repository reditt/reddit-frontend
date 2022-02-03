import React from "react";

const SiderCommunityList = ({ arrayLength }) => {
  return (
    <div className="w-full rounded-xl sticky top-20 ">
      <div
        className={`h-14 rounded-t-xl bg-gray-100 flex items-center justify-center text-center p-2 bg-img`}
      >
        <h2 className="text-white font-semibold ">Top growing communities</h2>
      </div>
      <div className="w-full bg-white p-2 rounded-b-xl">
        {[...Array(arrayLength)]?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center py-3 border-b-2 border-gray-50"
            >
              <div className="h-7 w-7  rounded-full bg-gray-100  animate-pulse" />
              <div className=" animate-pulse  bg-gray-100 ml-2 md:w-28 lg:w-44 h-6 rounded-full"></div>
              <button className=" animate-pulse ml-auto px-4 py-1 text-white bg-primary rounded-full items-center justify-center md:w-8 lg:w-12 h-6">
                ...
              </button>
            </div>
          );
        })}
        <button className=" animate-pulse w-full p-1 rounded-full bg-black text-primary font-semibold text-sm mt-2">
          Loading...
        </button>
      </div>
    </div>
  );
};

export default SiderCommunityList;
