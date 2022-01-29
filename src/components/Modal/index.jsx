import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Close } from "../../assets/close.svg";
import { setCommunityModal } from "../../redux/actions/modal.action";

const Modal = ({ children }) => {
  const Dispatch = useDispatch();

  return (
    <div className="w-screen bg-modal  fill-overlay z-10 absolute left-0 top-14 flex justify-center ">
      <div className="w-11/12 sm:w-modalw md:w-modalw bg-white rounded-md relative opacity-100 mt-16 max-h-modalh overflow-y-auto shadow-xl">
        <Close
          onClick={() => {
            Dispatch(setCommunityModal(false));
          }}
          className="absolute top-4 right-4 w-3.5 cursor-pointer"
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
