import { createAction } from '@reduxjs/toolkit';

export const filterContact = createAction('contact/Filter');

export const fetchContactRequest = createAction('contact/fetchRequest');
export const fetchContactSuccess = createAction('contact/fetchSuccess');
export const fetchContactError = createAction('contact/fetchError');

export const addContactRequest = createAction('contact/addRequest');
export const addContactSuccess = createAction('contact/addSuccess');
export const addContactError = createAction('contact/addError');

export const removeContactRequest = createAction('contact/removeRequest');
export const removeContactSuccess = createAction('contact/removeSuccess');
export const removeContactError = createAction('contact/removeError');

// const tasksActions = {
//   filterContact,
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   removeContactRequest,
//   removeContactSuccess,
//   removeContactError,
// };

// export default tasksActions;

// export default {
//   filterContact,
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   removeContactRequest,
//   removeContactSuccess,
//   removeContactError,
// };
