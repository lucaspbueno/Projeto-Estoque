export const ADD_NEW_ACTION = 'ADD_NEW_ACTION';
export const EDIT_ACTION = 'EDIT_ACTION';
export const DELETE_ACTION = 'DELETE_ACTION';

export const addNewAction = (type, productName, when) => ({
  type: ADD_NEW_ACTION,
  payload: {
    type,
    productName,
    when
  }
});

export const editAction = (type, productName, when) => ({
  type: ADD_NEW_ACTION,
  payload: {
    type,
    productName,
    when
  }
});

export const deleteAction = (type, productName, when) => ({
  type: DELETE_ACTION,
  payload: {
    type,
    productName,
    when
  }
});

