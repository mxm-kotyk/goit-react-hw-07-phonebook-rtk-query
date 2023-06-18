import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, legacy_createStore as createStore } from 'redux';

const contactsInitialState = {
  contacts: [],
};

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'filter/updateFilter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const filterInitialState = {
  filter: '',
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/updateFilter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
