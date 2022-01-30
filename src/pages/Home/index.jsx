import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/logo512.png";
import CommunityModal from "../../components/CommunityModal";

const Home = () => {
  const isOpenCommunityModal = useSelector(
    (state) => state.modalReducer.communityModal
  );
  return (
    <>
      <motion.div
        animate={{ y: [-100, 10, 0] }}
        transition={{ duration: 0.5 }}
        className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
      >
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">
            React Boilerplate
          </div>
          <p className="text-gray-500">Hello from mihir verma</p>
        </div>
      </motion.div>
      {isOpenCommunityModal ? <CommunityModal /> : null}
    </>
  );
};

export default Home;
