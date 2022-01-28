import React from "react";
import { ReactComponent as Close } from "../../assets/close.svg";

const Modal = ({ children }) => {
  return (
    <div className="w-screen bg-modal  fill-scr z-10 absolute left-0 top-14 flex justify-center ">
      <div className="md:w-modal bg-white rounded-md relative opacity-100 mt-16 max-h-modal overflow-y-auto">
        <Close className="absolute top-4 right-4 w-3.5" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
