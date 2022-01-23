import { baseURL, setTokenLocal } from "../utils/axios";
import ApiRoutes from "../config/endpoints.config";
import HttpClient from "./httpClient";

class Auth extends HttpClient {
  constructor() {
    super(baseURL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      const token = getTokenLocal() || "";
      config.headers.Authorization = token;
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
}

export default Auth;
