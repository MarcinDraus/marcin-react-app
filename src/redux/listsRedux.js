import shortid from "shortid";

//selectors
export const getListById = ({ lists }, listId) => lists.find((list) => list.id === listId);
export const getAllLists = (state) => state.lists;
export const getColumnsByList = ({ columns }, listId) => columns.filter((column) => column.listId === listId);
// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LISTFORM = createActionName('ADD_LISTFORM');

// action creators
export const addListForm = (payload) => ({ type: 'ADD_LISTFORM', payload });
const listsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_LISTFORM':
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    };
  };
  export default listsReducer;
