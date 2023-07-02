
import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
    console.log(state, 'state');
    switch(action.type) {
        case 'ADD_COLUMN':
          return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};//newColumn
        default:
          return state;
        case 'ADD_CARD':
            return {
                ...state, cards: [...state.cards, { ...action.payload, id: shortid() }
                ]
              };
    
      }
  
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

 // const addColumn = newColumn => {
  //   setColumns([
  //     ...columns,
  //     { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] },
  //   ]);
  // };