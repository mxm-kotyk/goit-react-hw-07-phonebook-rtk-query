import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './state';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    fetchAllContactsPending(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchAllContactsFulfilled(state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    fetchAllContactsRejected(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    addContactPending(state) {
      state.isLoading = true;
      state.error = null;
    },
    addContactFulfilled(state, { payload }) {
      state.isLoading = false;
      state.items.push(payload);
    },
    addContactsRejected(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    deleteContactPending(state) {
      state.isLoading = true;
      state.error = null;
    },
    deleteContactFulfilled(state, { payload }) {
      state.isLoading = false;
      const index = state.items.findIndex(contact => contact.id === payload);
      state.items.splice(index, 1);
    },
    deleteContactsRejected(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  fetchAllContactsPending,
  fetchAllContactsFulfilled,
  fetchAllContactsRejected,
  addContactPending,
  addContactFulfilled,
  addContactsRejected,
  deleteContactPending,
  deleteContactFulfilled,
  deleteContactsRejected,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
