
import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors

export const searchString = (payload) => ({type: 'SEARCHSTRING', payload});

export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });//kreator

export const getAllColumns = (state) => state.columns;

export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );
/* jej rola to dostanie się do tych kart z centrali, które pasują do podanej kolumny oraz frazy wyszukiwania.

Oczekujemy na dwa argumenty: stan zdanymi z centrali oraz id kolumny, która nas interesuje. Z której chcemy pobrać karty. Następnie funkcja przechodzi po wszystkich kartach (state.cards) i zwraca tylko te, które faktycznie mają columnId zgodne z argumentem columnId oraz title pasujące do state.searchString. */
const reducer = (state, action) => {
  console.log(state, 'state');
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
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
