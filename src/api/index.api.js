import axios from "axios";

export class HttpClient {
    constructor(baseURL) {
      this.instance = axios.create({
        baseURL
      });
    }
  }
  
  export default HttpClient;