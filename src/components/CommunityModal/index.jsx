import React, { useState } from "react";
import { ReactComponent as Person } from "../../assets/person.svg";
import { ReactComponent as Lock } from "../../assets/lock.svg";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import Modal from "../Modal";

const CommunityModal = () => {
  const [communityData, setCommunityData] = useState({
    name: "",
    type: "",
    adult: "",
    photo: "",
  });

  const { name, type, adult, photo } = communityData;
  const [nameWc, setNameWc] = useState(20);

  const handleChange = (e) => {
    const ename = e.target.name;
    const value = e.target.value;
    setCommunityData({ ...communityData, [ename]: value });
    setNameWc(20 - name.length);
  };

  return (
    <>
      <Modal>
        <div className="p-4">
          <h3 className="font-medium">Create Community</h3>
          <div className="mt-2">
            <form action="">
              <div className="flex flex-col my-4">
                <label className="text-sm font-semibold " htmlFor="name">
                  Name <span className="text-red-400 text-xs -mt-2">*</span>
                </label>
                <p className="text-xxs text-gray-400 mb-2">
                  Community names including capitalization cannot be changed.
                </p>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  maxLength={20}
                  value={name}
                  placeholder="community name"
                  className="h-10 bg-gray-100 rounded-md px-2 outline-none text-sm mt-1"
                />
                <p className="text-xxs text-gray-300">
                  {nameWc} Characters remaining
                </p>
                {!name.length ? (
                  <p className="text-xxs text-red-500">
                    community name is required
                  </p>
                ) : null}
              </div>

              <div className="my-4">
                <label
                  className="text-sm font-semibold text-black"
                  htmlFor="type"
                >
                  Community type{" "}
                </label>
                <div className="flex items-center py-1 mt-3">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="type"
                    value={type}
                    className=" bg-gray-100 rounded-md outline-none text-sm mr-2 h-4 w-4"
                  />
                  <Person className="w-4 mr-1" />
                  <label className="text-sm m-0 font-medium" htmlFor="name">
                    Public
                    <span className="text-xxs ml-2 text-gray-400">
                      Anyone can view, post, and comment to this community
                    </span>
                  </label>
                </div>
                <div className="flex items-center  py-1">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="type"
                    value={type}
                    className=" bg-gray-100 rounded-md outline-none text-sm mr-2 h-4 w-4"
                  />
                  <Eye className="w-4 mr-1" />
                  <label className="text-sm m-0 font-medium" htmlFor="name">
                    Private
                    <span className="text-xxs ml-2 text-gray-400">
                      Anyone can view this community, but only approved users
                      can post
                    </span>
                  </label>
                </div>
                <div className="flex items-center py-1 ">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="type"
                    value={type}
                    className=" bg-gray-100 rounded-md outline-none text-sm mr-2 h-4 w-4"
                  />
                  <Lock className="w-4 h-4 mr-1" />
                  <label className="text-sm m-0 font-medium" htmlFor="name">
                    Protected
                  </label>
                  <span className="text-xxs ml-2 text-gray-400">
                    Only approved users can view and submit to this community
                  </span>
                </div>
              </div>
              {/* ******* */}
              <div className="flex flex-col my-4">
                <label className="text-sm font-semibold " htmlFor="name">
                  Name <span className="text-red-400 text-xs -mt-2">*</span>
                </label>
                <p className="text-xxs text-gray-400 mb-2">
                  Community names including capitalization cannot be changed.
                </p>
                <input
                  onChange={handleChange}
                  type="file"
                  name="file"
                  value={photo}
                  className="h-10 bg-gray-100 rounded-md px-2 outline-none text-sm mt-1 items-center"
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommunityModal;
