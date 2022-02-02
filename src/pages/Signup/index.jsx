import React from "react";
import { ReactComponent as Logo } from "../../assets/maddit.svg";
import { ReactComponent as SignupLogo } from "../../assets/signup.svg";
import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Auth from "../../api/auth.api";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";

const authAPI = new Auth();

const Signup = () => {
  const Navigate = useHistory();
  const userRedux = useSelector((state) => state.userReducer.userData);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    encryptedPassword: "",
    confirmPassword: "",
    profilePhoto: "",
  });
  const { name, email, encryptedPassword, confirmPassword } = userData;

  // * HANDLECHANGE FOR INPUTS
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // * PASSWORD VALIDATION
  const validateAlphaNumericPassword = (pwd) => {
    var re = /^[a-z0-9]+$/i;
    return re.test(pwd);
  };

  // * USER SIGNUP
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const passCheck = encryptedPassword === confirmPassword;
    if (!name || !email || !encryptedPassword || !confirmPassword) {
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
    if (encryptedPassword.length < 8) {
      toast.error("your password length must be 8 characters long!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      setLoading(false);
      return 0;
    }
    if (validateAlphaNumericPassword(encryptedPassword)) {
      toast.error("password should be alphanumaric", {
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
    if (!passCheck) {
      toast.error("password does'nt match", {
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
    try {
      let data = { ...userData };
      delete data.confirmPassword;
      const result = await authAPI.userSignup(data);
      if (result.status === 201) {
        localStorage.setItem("user", result.data.data);
        localStorage.setItem("token", result.data.token);
        toast.success("Signed up successfully🎉 ", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
        Navigate.push("/");
        setLoading(false);
      } else {
        toast.error(result.data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      setLoading(false);
    }
  };

  // * CHECK FOR EXISTING USER
  if (userRedux) {
    return <Redirect to="/" />;
  }

  return loading ? (
    <Loader />
  ) : (
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
        <div className="text-center w-full">
          <p className="text-sm">
            Have an account?{" "}
            <span
              onClick={() => Navigate.push("/login")}
              className="text-primary cursor-pointer"
            >
              Signin
            </span>
          </p>
        </div>
        <div className="text-center mt-12 flex flex-col">
          <h2 className="inline-flex text-3xl font-semibold mx-auto ">
            Welcome to <Logo className="ml-2" />
          </h2>
          <h3 className="inline-flex text-xl font-semibold mx-auto">Signup!</h3>
        </div>
        <div className="w-full mt-12 md:w-96 md:mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-4">
              <label className="text-sm" htmlFor="name">
                Name <span className="text-red-400 text-xs -mt-2">*</span>
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
                placeholder="Enter your name"
                className="h-10 bg-gray-100 rounded-md px-2 outline-none text-sm mt-1"
              />
            </div>
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
            <div className="flex flex-col mt-4">
              <label className="text-sm" htmlFor="name">
                Confirm Password{" "}
                <span className="text-red-400 text-xs -mt-2">*</span>
              </label>
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm password"
                className="h-10 bg-gray-100 rounded-md px-2 outline-none text-sm mt-1"
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="h-10 bg-primary text-white font-medium w-full text-center rounded-md mt-8"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
