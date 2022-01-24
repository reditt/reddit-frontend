import React from "react";
import { ReactComponent as Logo } from "../../assets/maddit.svg";
import { ReactComponent as SignupLogo } from "../../assets/signup.svg";
import { ReactComponent as Dots } from "../../assets/dots.svg";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const Navigate = useHistory();

  const [userData, setUserData] = useState({
    email: "",
    encryptedPassword: "",
  });
  const { email, encryptedPassword } = userData;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !encryptedPassword) {
      toast.error("Please fill all the fields!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      return 0;
    }
  };

  return (
    <div className="w-full flex text-gray-900 h-screen fill-scr">
      <div className="hidden md:flex md:flex-col md:w-1/2 bg-gray-50 ">
        <div className="pt-4">
          <Logo className="h-8" />
        </div>
        <div className="flex flex-col mt-20 text-center">
          <SignupLogo className="w-9/12 mx-auto h-auto" />
          <h2 className="font-semibold text-2xl text-gray-800 mt-8">
            Few clicks away from <br /> being
            <span className="text-primary"> Maddit!</span>
          </h2>
        </div>
      </div>
      <div className="p-2 px-4 w-full md:w-1/2">
        <p className="text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => Navigate.push("/signup")}
            className="text-primary cursor-pointer"
          >
            Signup
          </span>
        </p>
        <div className="text-center mt-12 flex flex-col md:mt-32">
          <h2 className="inline-flex text-3xl font-semibold mx-auto ">
            Let's get <Logo className="ml-2" />
          </h2>
          <h3 className="inline-flex text-xl font-semibold mx-auto">Login!</h3>
        </div>
        <div className="w-full mt-12 md:w-96 md:mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-4">
              <label className="text-sm" htmlFor="email">
                Email <span className="text-red-400 text-xs -mt-2">*</span>
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                className="h-10 bg-gray-100 rounded-md px-2 outline-none text-sm mt-1"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-sm" htmlFor="name">
                Password <span className="text-red-400 text-xs -mt-2">*</span>
              </label>
              <input
                onChange={handleChange}
                type="password"
                name="encryptedPassword"
                value={encryptedPassword}
                placeholder="Enter your password"
                className="h-10 bg-gray-100 rounded-md px-2 outline-none text-sm mt-1"
              />
            </div>
            <div className="mt-2 text-center">
              <span className="text-primary text-xs cursor-pointer">
                Forgot password?
              </span>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="h-10 bg-primary text-white font-medium w-full text-center rounded-md mt-8"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
