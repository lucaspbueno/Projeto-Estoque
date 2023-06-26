import { ADD_NEW_ACTION, DELETE_ACTION, EDIT_ACTION } from "../actions/HistoricActions";

const INITIAL_STATE = {
  added: [],
  edited: [],
  removed: []
};

const historicActionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_ACTION:
      return state = {
        ...state,
        added: [
          ...state.added,
          {
            type: action.payload.type,
            productName: action.payload.productName,
            when: action.payload.when
          }
        ]
      };
      case EDIT_ACTION:
        return state = {
          ...state,
          edited: [
            ...state.edited,
            {
              type: action.payload.type,
              productName: action.payload.productName,
              when: action.payload.when
            }
          ]
        };
        case DELETE_ACTION:
        return state = {
          ...state,
          removed: [
            ...state.removed,
            {
              type: action.payload.type,
              productName: action.payload.productName,
              when: action.payload.when
            }
          ]
        }
    default:
      return state;
  }
};

export default historicActionsReducer;
