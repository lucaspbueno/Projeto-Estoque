export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const UPDATE_ID_TO_EDIT = 'UPDATE_ID_TO_EDIT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT';
export const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT';

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload
});

export const editProduct = (payload) => ({
  type: EDIT_PRODUCT,
  payload
});

export const updateIdToEdit = (idToEdit) => ({
  type:  UPDATE_ID_TO_EDIT,
  idToEdit
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id
});

export const decrementProduct = (id) => ({
  type: DECREMENT_PRODUCT,
  id
});

export const incrementProduct = (id) => ({
  type: INCREMENT_PRODUCT,
  id
});