import { useEffect } from 'react';
import { Contact } from './Contact/Contact';
import { ContactsList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/thunks';

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = filterContacts(items, filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <ContactsList>
        {filteredContacts.map(({ id, name, number }) => {
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
      </ContactsList>
    </div>
  );
};
