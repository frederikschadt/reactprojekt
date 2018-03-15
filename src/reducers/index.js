import { combineReducers } from 'redux';
import ElementsReducer from './reducer_elements';
import ActiveElement from './reducer_active_element';

const rootReducer = combineReducers({
  elements: ElementsReducer,
  activeElement: ActiveElement
});

export default rootReducer;
