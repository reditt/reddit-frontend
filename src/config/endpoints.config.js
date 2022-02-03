export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

const ApiRoutes = {
  Auth: {
    UserSignup: {
      Endpoint: "/signup",
      Method: HttpMethod.Post,
    },
    UserSignin: {
      Endpoint: "/signin",
      Method: HttpMethod.Post,
    },
    SendMail: {
      Endpoint: "/forgotpassword",
      Method: HttpMethod.Post,
    },
    ResetPassword: {
      Endpoint: "/resetpassword",
      Method: HttpMethod.Put,
    },
  },
  Cloudinary: {
    ImageUpload: {
      Endpoint: "/image/upload",
      Method: HttpMethod.Post,
    },
  },
  Community: {
    CreateCommunity: {
      Endpoint: "/community",
      Method: HttpMethod.Post,
    },
    CheckName: {
      Endpoint: "/community/checkname",
      Method: HttpMethod.Get,
    },
    GetAll: {
      Endpoint: "/community",
      Method: HttpMethod.Get,
    },
    GetOne: {
      Endpoint: (name) => `/community/${name}`,
      Method: HttpMethod.Get,
    },
    Join: {
      Endpoint: (name) => `/community/${name}/join`,
      Method: HttpMethod.Get,
    },
  },
  User: {
    GetUser: {
      Endpoint: "/user",
      Method: HttpMethod.Get,
    },
  },
};

export default ApiRoutes;
