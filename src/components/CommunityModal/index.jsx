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
import Community from "../../api/community.api";
import Loader from "../Loader";

const CommunityModal = () => {
  const fileRef = useRef(null);
  const Dispatch = useDispatch();
  const communityApi = new Community();

  // eslint-disable-next-line
  // * local states
  const [loading, setLoading] = useState(false);
  const [nameAvailable, setNameAvailable] = useState(false);
  const [photo, setPhoto] = useState([]);
  const [nameWc, setNameWc] = useState(20);
  const [communityData, setCommunityData] = useState({
    name: "",
    type: "",
    adult: false,
  });

  const { name, type, adult } = communityData;

  // * handlechange for inputs
  const handleChange = async (e) => {
    const ename = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setCommunityData({ ...communityData, [ename]: value });
    if (ename === "name") setNameWc(20 - value.length);
    if (ename === "name") {
      try {
        const checkAvailability = await communityApi.checkCommunityName(value);
        if (checkAvailability.status === 200) {
          setNameAvailable(true);
        } else {
          setNameAvailable(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
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
    data.append("upload_preset", process.env.REACT_APP_CLOUD_UPLOAD_PRESET);
    data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
    try {
      const uploadResult = await axios({
        method: "post",
        url: process.env.REACT_APP_CLOUDINARY_FILE_UPLOAD_URL,
        data: data,
      });
      return uploadResult;
    } catch (error) {
      console.log(error);
    }
  };

  // * submitting community details
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
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
        const uploadResult = await uplaodImage(photo);
        if (uploadResult && nameAvailable) {
          const result = await communityApi.createCommmunity({
            ...communityData,
            logo: uploadResult?.data?.secure_url,
          });
          if (result.status === 201) {
            toast.success("Community created successfully!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
            });
            setLoading(false);
            Dispatch(setCommunityModal(false));
          } else {
            toast.error("Something went wrong!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
            });
            setLoading(false);
          }
        } else {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("server error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      setLoading(false);
      Dispatch(setCommunityModal(false));
    }
  };

  return (
    <>
      {!loading ? (
        <Modal>
          <div className="p-3 sm:p-4">
            <h3 className="font-medium">Create Community</h3>
            <div className="mt-2">
              <form>
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
                  ) : nameAvailable ? (
                    <div className="flex items-center">
                      <span class="flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-100"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                      </span>
                      <p className="text-xxs text-green-500 ml-2">
                        Name available
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span class="flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-100"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                      </span>
                      <p className="text-xxs text-red-500 ml-2">
                        Name not available
                      </p>
                    </div>
                  )}
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
                      onClick={handleSubmit}
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CommunityModal;
