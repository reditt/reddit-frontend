import React from "react";
import { ReactComponent as Logo } from "../../assets/maddit.svg";
import { ReactComponent as ForgotLogo } from "../../assets/forgot.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import Auth from "../../api/auth.api";
import Loader from "../../components/Loader";

const authApi = new Auth();

const ForgotPassword = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: location.state,
  });
  const { email } = userData;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(true);
    if (!email) {
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

    try {
      const result = await authApi.forgotPassword({ email });
      if (result.status === 200) {
        toast.success("Email has been sent to you mail id", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="w-full flex text-gray-900 h-screen fill-scr">
      <div className="hidden md:flex md:flex-col md:w-1/2 bg-gray-50 ">
        <div className="pt-4">
          <Logo className="h-8" />
        </div>
        <div className="flex flex-col mt-20 text-center">
          <ForgotLogo className="w-9/12 mx-auto h-auto" />
          <h2 className="font-semibold text-2xl text-gray-800 mt-8">
            Don't worry we are here <br /> to help
            <span className="text-primary"> You!</span>
          </h2>
        </div>
      </div>
      <div className="p-2 px-4 w-full md:w-1/2">
        <div className="text-center mt-12 flex flex-col md:mt-32">
          <h2 className="inline-flex text-3xl font-semibold mx-auto ">
            Let's reset <Logo className="ml-2" />
          </h2>
          <h3 className="inline-flex text-xl font-semibold mx-auto">
            Forgot Password!
          </h3>
        </div>
        <div className="w-full mt-12 md:w-96 md:mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-4">
              <label className="text-sm" htmlFor="email">
                Account Email{" "}
                <span className="text-red-400 text-xs -mt-2">*</span>
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
            <div className="w-full">
              <button
                type="submit"
                className="h-10 bg-primary text-white font-medium w-full text-center rounded-md mt-8"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
