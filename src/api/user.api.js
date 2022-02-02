import { baseURL, getTokenLocal } from "../utils/axios";
import ApiRoutes from "../config/endpoints.config";
import HttpClient from "./index.api";

class User extends HttpClient {
  constructor() {
    super(baseURL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      config.headers["authorization"] = getTokenLocal();
      return config;
    });
  };

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (response) => {
        return Promise.resolve(response);
      }
    );
  };

  getUserConfig = ApiRoutes.User.GetUser;

  getUserDetails = async () => {
    return this.instance({
      method: this.getUserConfig.Method,
      url: this.getUserConfig.Endpoint,
      headers: {},
    });
  };
}

export default User;
