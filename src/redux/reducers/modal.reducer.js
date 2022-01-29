const initialState = { communityModal: false };

const communityModal = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMMUNITY_MODAL":
      return {
        ...state,
        communityModal: action.payload,
      };
    default:
      return state;
  }
};

export default communityModal;
