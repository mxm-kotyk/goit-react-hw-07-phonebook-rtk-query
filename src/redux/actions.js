import { createAction } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const addContactAction = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: { id: uniqid(), name, number },
    };
  }
);

export const deleteConatactAction = createAction('contacts/deleteContact');

export const updateFilterAction = createAction('filter/updateFilter');
