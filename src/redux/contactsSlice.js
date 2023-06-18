import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './state';
import { addContact, deleteContact, fetchContacts } from './thunks';

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectedAction = action => {
  return action.type.endsWith('/rejected');
};

const turnOffLoader = state => {
  state.isLoading = false;
};

const handleFetchContactsFulfilled = (state, { payload }) => {
  turnOffLoader(state);
  state.items = payload;
};

const handleAddContactFulfilled = (state, { payload }) => {
  turnOffLoader(state);
  state.items.push(payload);
};

const handleDeleteContactFulfilled = (state, { payload }) => {
  turnOffLoader(state);
  const index = state.items.findIndex(contact => contact.id === payload);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejectedAction, (state, { payload }) => {
        turnOffLoader(state);
        state.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
