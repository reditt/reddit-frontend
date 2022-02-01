import React from "react";

const Wrapper = ({ className, children }) => {
  return (
    <div className={`w-full lg:w-wrapper mx-auto ${className}`}>{children}</div>
  );
};

export default Wrapper;
