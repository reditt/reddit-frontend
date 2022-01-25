import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/loading.json";

const Loader = () => {
  const style = {
    height: 250,
    marginTop: "8rem",
  };
  return (
    <div className="w-full text-center fill-scr flex flex-col">
      <Lottie animationData={animationData} style={style} loop={true} />
      <h2 className="text-2xl font-medium text-gray-900 animate-pulse">
        Loading
      </h2>
    </div>
  );
};

export default Loader;
