import React, { useState, useRef } from "react";
import { ReactComponent as Person } from "../../assets/person.svg";
import { ReactComponent as Lock } from "../../assets/lock.svg";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Image } from "../../assets/image.svg";
import Modal from "../Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCommunityModal } from "../../redux/actions/modal.action";

const CommunityModal = () => {
  const fileRef = useRef(null);
  const Dispatch = useDispatch();

  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState([]);
  const [communityData, setCommunityData] = useState({
    name: "",
    type: "",
    adult: false,
  });

  const { name, type, adult } = communityData;
  const [nameWc, setNameWc] = useState(20);

  // * handlechange for inputs
  const handleChange = (e) => {
    const ename = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setCommunityData({ ...communityData, [ename]: value });
    if (ename === "name") setNameWc(20 - name.length);
  };

  // * handling image files
  const handlePhoto = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setPhoto(file);
  };

  // * image uplaod on cloudinary
  const uplaodImage = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "meddit");
    data.append("cloud_name", "medditcloud");
    try {
      const uploadResult = await axios({
        method: "post",
        url: "https://api.cloudinary.com/v1_1/medditcloud/image/upload",
        data: data,
      });
      console.log(uploadResult);
      return uploadResult;
    } catch (error) {
      console.log(error);
    }
  };

  // * submitting community details
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !type || !adult) {
        toast.error("Please fill all the fields!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
        setLoading(false);
        return 0;
      }
      if (photo) {
        const uploadResult = await uplaodImage();
        console.log(uploadResult);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal>
        <div className="p-3 sm:p-4">
          <h3 className="font-medium">Create Community</h3>
          <div className="mt-2">
            <form onSubmit={handleSubmit}>
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
                <div className="flex items-center py-1 mt-1">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="type"
                    value="public"
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
                    value="private"
                    className=" bg-gray-100 rounded-md outline-none text-sm mr-2 h-4 w-4"
                  />
                  <Eye className="w-4 mr-1" />
                  <label className="text-sm m-0 font-medium " htmlFor="name">
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
                    value="protected"
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
              <div className="flex flex-col my-4">
                <label className="text-sm font-semibold " htmlFor="name">
                  Cover image{" "}
                  <span className="text-red-400 text-xs -mt-2">*</span>
                </label>
                <p className="text-xxs text-gray-400 mb-2">
                  Community cover image only includes jpeg, jpg & png formats.
                </p>
                <div className="relative">
                  <input
                    ref={fileRef}
                    onChange={handlePhoto}
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    className="h-10 bg-gray-100 rounded-md px-2 outline-none text-sm mt-1 items-center opacity-0"
                  />
                  <div className="h-10 flex bg-gray-100 rounded-md  outline-none text-sm mt-1 items-center absolute top-0 w-full">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        fileRef.current.click();
                      }}
                      className="w-auto px-3 h-full rounded-md text-white text-center bg-primary flex items-center text-sm"
                    >
                      Choose cover <Image className="w-6 ml-2" />
                    </button>
                    <p className="text-gray-400 ml-2">
                      {" "}
                      {photo?.name?.length
                        ? photo?.name.slice(0, 8) +
                          ".." +
                          " " +
                          photo?.name.slice(-4)
                        : null}
                    </p>
                    {photo?.name ? (
                      <button
                        onClick={() => {
                          setPhoto("");
                        }}
                        className="flex items-center ml-auto mr-2 "
                      >
                        <Delete />
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="my-4">
                <label
                  className="text-sm font-semibold text-black"
                  htmlFor="type"
                >
                  Adult Content{" "}
                </label>
                <div className="flex items-center py-1 mt-1">
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="adult"
                    checked={adult}
                    className=" bg-gray-100 rounded-md outline-none text-sm mr-2 h-4 w-4 cursor-pointer"
                  />
                  <label className="text-sm m-0 font-medium" htmlFor="name">
                    <span className="p-0.5 text-xxs bg-red-500 text-white rounded-md">
                      NSFW
                    </span>{" "}
                    18+ year old community
                  </label>
                </div>
                <hr />
                <div className="mt-2 flex items-end justify-end h-full">
                  <button
                    onClick={() => {
                      Dispatch(setCommunityModal(false));
                    }}
                    className="mr-2 text-sm p-2 rounded-md  text-white bg-red-500 font-medium"
                  >
                    cancel
                  </button>
                  <button
                    type="submit"
                    className="text-sm p-2 rounded-md  bg-primary text-white font-medium"
                  >
                    Create Community
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommunityModal;
