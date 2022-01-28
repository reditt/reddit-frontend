import { baseURL, setTokenLocal } from "../utils/axios";
import ApiRoutes from "../config/endpoints.config";
import HttpClient from "./index.api";

class Auth extends HttpClient {
  constructor() {
    super(baseURL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      return config;
    });
  };

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => {
        if (response.status === 200) {
          setTokenLocal(response.data.token);
        }
        return response;
      },
      (response) => {
        return Promise.resolve(response);
      }
    );
  };

  loginConfig = ApiRoutes.Auth.UserSignin;
  signupConfig = ApiRoutes.Auth.UserSignup;
  forgotConfig = ApiRoutes.Auth.SendMail;
  resetConfig = ApiRoutes.Auth.ResetPassword;

  userLogin = async (data) => {
    return this.instance({
      method: this.loginConfig.Method,
      url: this.loginConfig.Endpoint,
      headers: {},
      data,
    });
  };

  userSignup = async (data) => {
    return this.instance({
      method: this.signupConfig.Method,
      url: this.signupConfig.Endpoint,
      headers: {},
      data,
    });
  };

  forgotPassword = async (data) => {
    return this.instance({
      method: this.forgotConfig.Method,
      url: this.forgotConfig.Endpoint,
      headers: {},
      data,
    });
  };

  resetPassword = async (data) => {
    return this.instance({
      method: this.resetConfig.Method,
      url: this.resetConfig.Endpoint,
      headers: {
        authorization: data.resetoken,
      },
      data: {
        encryptedPassword: data.encryptedPassword,
      },
    });
  };
}

export default Auth;
