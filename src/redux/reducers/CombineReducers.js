import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import formReducer from './FormReducer';
import tableReducer from './TableReducer';
import historicActionsReducer from './HistoricReducer';

const rootReducer = combineReducers({
  user: loginReducer,
  form: formReducer,
  table: tableReducer,
  historic: historicActionsReducer
});

export default rootReducer;