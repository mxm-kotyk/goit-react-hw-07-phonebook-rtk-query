import axios from 'axios';

axios.defaults.baseURL = 'https://648f2fb475a96b664444ce4d.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
};

export const addContact = async (name, number) => {
  const { data } = await axios.post('/contacts', { name, number });
  console.log(data);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  console.log(data);
};
