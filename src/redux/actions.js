export const addContactAction = contact => ({
  type: 'contacts/addContact',
  payload: contact,
});

export const deleteConatactAction = id => ({
  type: 'contacts/deleteContact',
  payload: id,
});

export const updateFilterAction = text => ({
  type: 'filter/updateFilter',
  payload: text,
});
