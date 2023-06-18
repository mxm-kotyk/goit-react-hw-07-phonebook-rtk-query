import { addContact, deleteContact, fetchContacts } from 'services/mockAPI';
import {
  addContactFulfilled,
  addContactPending,
  addContactsRejected,
  deleteContactFulfilled,
  deleteContactPending,
  deleteContactsRejected,
  fetchAllContactsFulfilled,
  fetchAllContactsPending,
  fetchAllContactsRejected,
} from './contactsSlice';

export const getContactsThunk = () => async dispatch => {
  dispatch(fetchAllContactsPending());

  try {
    const contacts = await fetchContacts();
    dispatch(fetchAllContactsFulfilled(contacts));
  } catch (error) {
    dispatch(fetchAllContactsRejected(error.message));
  }
};

export const addContactThunk = (name, number) => async dispatch => {
  dispatch(addContactPending());

  try {
    const contact = await addContact(name, number);
    dispatch(addContactFulfilled(contact));
  } catch (error) {
    dispatch(addContactsRejected(error.message));
  }
};

export const deleteContactThunk = id => async dispatch => {
  dispatch(deleteContactPending());

  try {
    const contact = await deleteContact(id);
    dispatch(deleteContactFulfilled(contact));
  } catch (error) {
    dispatch(deleteContactsRejected(error.message));
  }
};
