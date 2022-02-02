import React from "react";
import madditlogo1 from "../../assets/medditlogo1.png";
import { ReactComponent as More } from "../../assets/more.svg";
import { ReactComponent as Comment } from "../../assets/comment.svg";
import { ReactComponent as Share } from "../../assets/share.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as Save } from "../../assets/save.svg";
// import { ReactComponent as Hide } from "../../assets/hide.svg";
const Article = () => {
  return (
    <>
      <div className=" mt-4 flex bg-white p-2 rounded-xl md:p-4">
        <img
          src={madditlogo1}
          className="w-12 h-12 rounded-full object-cover object-center"
          alt="avatar"
        />

        <div className="flex  flex-col">
          <div className="flex items-center px-2">
            <p className="text-sm font-semibold">Wayne roonie</p>
            <p className="text-sm text-gray-400 ml-1"> | @realroonie..</p>
            <span className="flex items-center ml-auto">
              <p className="text-sm text-gray-400 ml-1"> 2d</p>
              <More className="h-4 w-4 rounded-full ml-1 p-0.5 hover:bg-gray-100 cursor-pointer" />
            </span>
          </div>
          <div className="flex  items-center px-2">
            <p className="text-sm break-all whitespace-pre-line">
              Tailwind lets you conditionally apply utility classes in different
              states using variant modifiers. For example, use hover:grow-0 to
              only apply the grow-0 utility on hover.
            </p>
          </div>
          <div className="bg-dblack rounded-xl  mt-1 md:mt-2">
            <img
              className="max-h-96 rounded-xl bg-gray-100 mx-auto object-center cursor-pointer "
              src="https://assets.teenvogue.com/photos/59ca525c4ae64e5d63809461/16:9/w_2560%2Cc_limit/weeknd-lede.jpg"
              alt=""
            />
          </div>
          <div className="flex items-center mt-3 md:justify-end">
            <span className="flex text-xs text-gray-400 items-start hover:bg-green-50 py-1 px-1.5 rounded-full cursor-pointer ">
              <Arrow className="w-4 h-4 mr-1" />
              <span className="leading-none my-auto">245</span>
            </span>
            <span className="flex text-xs text-gray-400 items-start ml-3 hover:bg-blue-50 px-1.5 py-1 rounded-full cursor-pointer">
              <Comment className="w-4 h-4 mr-1" />
              <span className="leading-none my-auto">245</span>
            </span>
            <span className="flex text-xs text-gray-400 items-start ml-3 hover:bg-red-50 px-1.5 py-1 rounded-full cursor-pointer">
              <Save className="w-4 h-4 mr-1" />
              <span className="leading-none my-auto">245</span>
            </span>
            <span className="flex text-xs text-gray-400 items-start ml-3 hover:bg-yellow-50 px-1.5 py-1 rounded-full cursor-pointer">
              <Share className="w-4 h-4 mr-1" />
              <span className="leading-none my-auto">245</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
