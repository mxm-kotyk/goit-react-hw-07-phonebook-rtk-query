import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './state';
import { addContact, deleteContact, fetchContacts } from './thunks';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const index = state.items.findIndex(contact => contact.id === payload);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  addContactPending,
  addContactFulfilled,
  addContactsRejected,
  deleteContactPending,
  deleteContactFulfilled,
  deleteContactsRejected,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
