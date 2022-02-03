import React from "react";
import Wrapper from "../../components/Wrapper";
import { motion } from "framer-motion";
import { ReactComponent as ImageLogo } from "../../assets/ImageLogo.svg";
import { ReactComponent as Link } from "../../assets/Link.svg";
import Article from "../../components/Article";
import CategoryTab from "../../components/CategoryTab";
import TopCommunitySider from "../../components/TopCommunitySider";

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
              <TopCommunitySider />
            </div>
          </div>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default Home;
