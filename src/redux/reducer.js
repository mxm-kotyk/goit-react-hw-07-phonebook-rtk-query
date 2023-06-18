import { createReducer } from '@reduxjs/toolkit';
import {
  addContactAction,
  deleteConatactAction,
  updateFilterAction,
} from './actions';
import { contactsInitialState, filterInitialState } from './state';

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContactAction, (state, { payload }) => {
      state.push(payload);
    })
    .addCase(deleteConatactAction, (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    });
});

export const filterReducer = createReducer(filterInitialState, builder => {
  builder.addCase(updateFilterAction, (state, { payload }) => {
    return payload;
  });
});
