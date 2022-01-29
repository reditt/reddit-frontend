import { baseURL, setTokenLocal } from "../utils/axios";
import ApiRoutes from "../config/endpoints.config";
import HttpClient from "./index.api";

class Community extends HttpClient {
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

  createConfig = ApiRoutes.Community.CreateCommunity;

  createCommmunity = async (data) => {
    return this.instance({
      method: this.createConfig.Method,
      url: this.createConfig.Endpoint,
      headers: {},
      data,
    });
  };
}

export default Community;
