import { baseURL, getTokenLocal } from "../utils/axios";
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

  createConfig = ApiRoutes.Community.CreateCommunity;
  checkNameConfig = ApiRoutes.Community.CheckName;
  getallConfig = ApiRoutes.Community.GetAll;
  getoneConfig = ApiRoutes.Community.GetOne;
  joinConfig = ApiRoutes.Community.Join;

  createCommmunity = async (data) => {
    return this.instance({
      method: this.createConfig.Method,
      url: this.createConfig.Endpoint,
      headers: {},
      data,
    });
  };

  getAllCommunities = async () => {
    return this.instance({
      method: this.getallConfig.Method,
      url: this.getallConfig.Endpoint,
      headers: {},
    });
  };

  getCommunity = async () => {
    return this.instance({
      method: this.getallConfig.Method,
      url: this.getallConfig.Endpoint,
      headers: {},
    });
  };

  checkCommunityName = async (name) => {
    return this.instance({
      method: this.checkNameConfig.Method,
      url: this.checkNameConfig.Endpoint,
      headers: {},
      params: {
        name: name,
      },
    });
  };

  joinCommunity = async (name) => {
    return this.instance({
      method: this.joinConfig.Method,
      url: this.joinConfig.Endpoint(name),
      headers: {},
    });
  };
}

export default Community;
