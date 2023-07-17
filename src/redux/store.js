
import { legacy_createStore as createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

// Actions
export const toggleFavorite = (payload) => ({ type: 'TOGGLE_CARD_FAVORITE', payload });
export const addListForm = (payload) => ({ type: 'ADD_LISTFORM', payload });
export const searchString = (payload) => ({ type: 'SEARCHSTRING', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

// Selectors
export const getAllLists = (state) => state.lists;
export const getColumnsByList = ({ columns }, listId) => columns.filter((column) => column.listId === listId);
export const getListById = ({ lists }, listId) => lists.find((list) => list.id === listId);
export const getAllColumns = (state) => state.columns;
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter((card) => card.columnId === columnId && strContains(card.title, searchString));

export const getFavoriteLists = (state) => state.lists.filter((list) => list.isFavorite === true);

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid.generate() }] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid.generate() }] };
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
    case 'SEARCHSTRING':
      return { ...state, searchString: action.payload };
    case 'ADD_LISTFORM':
      return { ...state, lists: [...state.lists, { ...action.payload, id: shortid.generate() }] };
    case 'TOGGLE_CARD_FAVORITE':
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card
        ),
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;




// //import { createStore } from 'redux';
// import { legacy_createStore as createStore} from 'redux'
// import initialState from './initialState';
// import shortid from 'shortid';
// import { strContains } from '../utils/strContains';

// //selectors
// export const toggleFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});
// export const addListForm = payload => ({type: 'ADD_LISTFORM', payload});
// export const getAllLists = (state) => state.lists;
// export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);
// export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

// export const searchString = (payload) => ({type: 'SEARCHSTRING', payload});

// export const addCard = payload => ({ type: 'ADD_CARD', payload });
// export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });//{ listId, title, icon, id: shortid.generate() },

// export const getAllColumns = (state) => state.columns;
// export const getFilteredCards = ({ cards, searchString }, columnId) => {
//   console.log('getFilteredCards - cards:', cards);
//   console.log('getFilteredCards - searchString:', searchString);
//   console.log('getFilteredCards - columnId:', columnId);
//   return cards.filter(
//     (card) =>
//       card.columnId === columnId && strContains(card.title, searchString)
//   );
  
//  };

// const reducer = (state, action) => {
//   console.log(action, 'action');
//   console.log(state, 'state');

//   switch (action.type) {
//     case 'ADD_COLUMN':
//       return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
//     case 'ADD_CARD':
//       return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
//     case 'UPDATE_SEARCHSTRING':
//       return { ...state, searchString: action.payload };
//     case 'SEARCHSTRING': // Dodany case dla akcji 'SEARCHSTRING'
//       return { ...state, searchString: action.payload };
//     case 'ADD_LISTFORM':
//         return {...state, lists: [ ...state.lists, {...action.payload, id: shortid() }] };
//     case 'TOGGLE_CARD_FAVORITE':
//       return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
//     default:
//       return state;
//   }
// };


// const store = createStore(
//   reducer,
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
