const initialState = { userData: null };

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default user;
