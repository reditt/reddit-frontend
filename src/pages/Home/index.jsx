import React from "react";
import Wrapper from "../../components/Wrapper";
import madditlogo1 from "../../assets/medditlogo1.png";
import { motion } from "framer-motion";
import { ReactComponent as ImageLogo } from "../../assets/ImageLogo.svg";
import { ReactComponent as Link } from "../../assets/Link.svg";
import Article from "../../components/Article";
import CategoryTab from "../../components/CategoryTab";

const Home = () => {
  return (
    <>
      <motion.div animate={{ y: [-100, 10, 0] }} transition={{ duration: 0.5 }}>
        <Wrapper>
          <div className="w-full flex justify-center p-2 mt-4  md:gap-4">
            <div className="w-full md:w-seventy">
              <div className="p-2 rounded-xl w-11/12 mx-auto flex bg-white md:w-full mb-4">
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
              <div className="mt-6">
                <p className="font-medium text-black ">Popular posts</p>
                <Article />
                <Article />
              </div>
            </div>
            {/* right */}
            <div className="hidden md:flex md:flex-col md:w-thirty relative">
              <div className="w-full rounded-xl sticky top-20">
                <div
                  className={`h-12 rounded-t-xl bg-black flex items-center justify-center text-center p-2`}
                >
                  <h2 className="text-white font-semibold ">
                    Top growing communities
                  </h2>
                </div>
                <div className="w-full bg-white p-2 rounded-b-xl">
                  <div className="flex items-center py-3 border-b-2 border-gray-50">
                    <img
                      src={madditlogo1}
                      className="h-7 w-7 object-cover object-center rounded-full"
                      alt="avatar"
                    />
                    <p className="font-semibold text-black text-sm ml-2">
                      Community name
                    </p>
                    <button className="ml-auto px-4 py-1 text-xs font-semibold text-white bg-primary rounded-full hover:bg-blue-400">
                      Join
                    </button>
                  </div>
                  <div className="flex items-center py-3 border-b-2 border-gray-50">
                    <img
                      src={madditlogo1}
                      className="h-7 w-7 object-cover object-center rounded-full"
                      alt="avatar"
                    />
                    <p className="font-semibold text-black text-sm ml-2">
                      Community name
                    </p>
                    <button className="ml-auto px-4 py-1 text-xs font-semibold text-white bg-primary rounded-full hover:bg-blue-400">
                      Join
                    </button>
                  </div>
                  <div className="flex items-center py-3 border-b-2 border-gray-50">
                    <img
                      src={madditlogo1}
                      className="h-7 w-7 object-cover object-center rounded-full"
                      alt="avatar"
                    />
                    <p className="font-semibold text-black text-sm ml-2">
                      Community name
                    </p>
                    <button className="ml-auto px-4 py-1 text-xs font-semibold text-white bg-primary rounded-full hover:bg-blue-400">
                      Join
                    </button>
                  </div>
                  <div className="flex items-center py-3 border-b-2 border-gray-50">
                    <img
                      src={madditlogo1}
                      className="h-7 w-7 object-cover object-center rounded-full"
                      alt="avatar"
                    />
                    <p className="font-semibold text-black text-sm ml-2">
                      Community name
                    </p>
                    <button className="ml-auto px-4 py-1 text-xs font-semibold text-white bg-primary rounded-full hover:bg-blue-400">
                      Join
                    </button>
                  </div>
                  <div className="flex items-center py-3 border-b-2 border-gray-50">
                    <img
                      src={madditlogo1}
                      className="h-7 w-7 object-cover object-center rounded-full"
                      alt="avatar"
                    />
                    <p className="font-semibold text-black text-sm ml-2">
                      Community name
                    </p>
                    <button className="ml-auto px-4 py-1 text-xs font-semibold text-white bg-primary rounded-full hover:bg-blue-400">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default Home;
