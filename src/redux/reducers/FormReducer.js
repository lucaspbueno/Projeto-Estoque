import { TOOGLE_TYPE } from "../actions/FormActions";

const INITIAL_STATE = {
  type: 'send',
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOOGLE_TYPE:
      return state = {
        type: state.type === 'send' ? 'receive' : 'send'
      }
    default:
      return state;
  }
};

export default formReducer;
