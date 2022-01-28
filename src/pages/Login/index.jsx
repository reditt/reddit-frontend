import React from "react";
import { ReactComponent as Logo } from "../../assets/maddit.svg";
import { ReactComponent as SignupLogo } from "../../assets/signup.svg";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Auth from "../../api/auth.api";
import Loader from "../../components/Loader";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/SyncLoader";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/setUser.action";

const override = css`
  display: inline;
  margin-right: 0.5rem;
`;

const authAPI = new Auth();
const Login = () => {
  const Navigate = useHistory();
  const Dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !encryptedPassword) {
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
      let data = { email: email, password: encryptedPassword };
      const result = await authAPI.userLogin(data);
      if (result.status === 200) {
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        Dispatch(setUser(result.data.user));

        localStorage.setItem("token", result.data.token);
        toast.success("Signed in successfully🎉 ", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
        Navigate.push("/");
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
            Don't have an account?{" "}
            <span
              onClick={() => Navigate.push("/signup")}
              className="text-primary cursor-pointer"
            >
              Signup
            </span>
          </p>
        </div>
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
              <span
                onClick={() =>
                  Navigate.push({
                    pathname: "/forgotpassword",
                    state: email,
                  })
                }
                className="text-primary text-xs cursor-pointer"
              >
                Forgot password?
              </span>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="h-10 bg-primary text-white font-medium w-full text-center rounded-md mt-8 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <ClipLoader
                    color="#ffff"
                    loading={true}
                    css={override}
                    size={5}
                  />
                ) : (
                  <div>Login</div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
