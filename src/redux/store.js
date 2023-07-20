
import initialState from './initialState';
import { createStore, combineReducers } from 'redux';
import listsReducer from './listsRedux'
import columnsReducer from './columnRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

//New Reducer
const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
