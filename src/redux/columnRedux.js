import shortid from "shortid";
import { strContains } from '../utils/strContains';

// selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter((card) => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = (state) => state.columns;

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    };
  };
  export default columnsReducer;