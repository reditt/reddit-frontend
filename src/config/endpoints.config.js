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
  },
};

export default ApiRoutes
