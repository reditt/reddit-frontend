import React, { useRef, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import { colourStyles } from "../../helpers/react-select.helper";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Image } from "../../assets/image.svg";
import { ReactComponent as Post } from "../../assets/post.svg";
import { motion } from "framer-motion";

const animatedComponents = makeAnimated();

const CreatePost = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const fileRef = useRef(null);
  const [photo, setPhoto] = useState([]);

  // * handling image files
  const handlePhoto = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setPhoto(file);
  };

  return (
    <motion.div
      animate={{ x: [-200, 10, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="py-6 flex gap-5"
    >
      <div className=" border-gray-200 lg:w-seventy">
        <div className="flex justify-between items-center pr-2 border-gray-100 border-b-2 pb-4">
          <h1 className="font-semibold text-black text-lg flex items-center">
            Create post
            <Post className="w-4 ml-2" />
          </h1>
          <button className="p-1 px-3 bg-black text-primary rounded-full text-xs">
            Save to draft
          </button>
        </div>
        <div className="w-80 mt-4">
          <p className="text-sm font-semibold text-black mb-2">
            Select community
          </p>
          <Select
            options={options}
            closeMenuOnSelect={true}
            placeholder="community"
            components={animatedComponents}
            styles={colourStyles}
          />
        </div>
        <div className="w-full mt-4 rounded-lg">
          <form>
            <div className="flex flex-col mt-2">
              <label className="text-sm font-semibold" htmlFor="name">
                Post title <span className="text-red-400 text-xs -mt-2">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter post title"
                className="h-10 bg-white focus:shadow-md rounded-md px-2 outline-none text-sm mt-1"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-sm font-semibold" htmlFor="name">
                Post description{" "}
                <span className="text-red-400 text-xs -mt-2">*</span>
              </label>
              <textarea
                type="text"
                name="name"
                rows={6}
                placeholder="Enter post description"
                className=" py-2 bg-white focus:shadow-md rounded-md px-2 outline-none text-sm mt-1 resize-none"
                cols={10}
              />
            </div>

            {/*  */}
            <div className="flex flex-col my-4">
              <label className="text-sm font-semibold " htmlFor="name">
                Post image <span className="text-red-400 text-xs -mt-2">*</span>
              </label>
              <p className="text-xxs text-gray-400 mb-2">
                Post image only includes jpeg, jpg & png formats.
              </p>
              <div className="relative">
                <input
                  ref={fileRef}
                  onChange={handlePhoto}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  className="h-10 bg-gray-100 rounded-md px-2 outline-none text-sm mt-1 items-center opacity-0"
                />
                <div className="h-10 flex bg-white rounded-md  outline-none text-sm mt-1 items-center absolute top-0 w-full">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      fileRef.current.click();
                    }}
                    className="w-auto px-3 h-full rounded-md text-white text-center bg-primary flex items-center text-sm"
                  >
                    Choose image <Image className="w-6 ml-2" />
                  </button>
                  <p className="text-gray-400 ml-2">
                    {" "}
                    {photo?.name?.length
                      ? photo?.name.slice(0, 8) +
                        ".." +
                        " " +
                        photo?.name.slice(-4)
                      : "image not choosen"}
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
            <div className="flex flex-col mt-2">
              <label className="text-sm font-semibold" htmlFor="name">
                Add tags <span className="text-red-400 text-xs -mt-2">*</span>
              </label>
              <CreatableSelect
                className="mt-1"
                options={options}
                placeholder="Add tags"
                components={animatedComponents}
                styles={colourStyles}
                isMulti
              />
            </div>

            <div className="mt-8 flex items-end justify-end h-full">
              <button className="mr-2 text-sm p-2 rounded-md  text-white bg-red-500 font-medium">
                cancel
              </button>
              <button
                type="submit"
                className="text-sm p-2 rounded-md  bg-primary text-white font-medium"
              >
                Upload post
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" border-gray-100 lg:w-thirty">test</div>
    </motion.div>
  );
};

export default CreatePost;
