import { GET_USERS, GET_USERS_SUCCESS } from "./actions";
import initialState from "./state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        users: action.users
      });
    default:
      return state;
  }
};

export default reducer;
