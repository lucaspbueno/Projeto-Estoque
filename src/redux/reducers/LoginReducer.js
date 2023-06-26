import { USER_ACCESS } from "../actions/LoginActions";

const INITIAL_STATE = {
  name: '',
  email: ''
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACCESS:
      return state = {
        name: action.payload.name,
        email: action.payload.email
      }
    default:
      return state;
  }
};

export default loginReducer;
