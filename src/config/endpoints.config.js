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
};

export default ApiRoutes;
