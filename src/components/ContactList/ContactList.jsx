import { Contact } from './Contact/Contact';
import { ContactsList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { useGetAllContactsQuery } from 'redux/contactsApi';
import { errorToast } from 'helpers/toasts';
import { DotWave } from '@uiball/loaders';

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const { data: contacts, isLoading, error } = useGetAllContactsQuery();

  const filter = useSelector(selectFilter);
  const filteredContacts = contacts && filterContacts(contacts, filter);

  const loadingIndicator = isLoading && (
    <DotWave size={100} speed={1} color="#204154" />
  );

  const showError = error && errorToast(error);

  return (
    <div>
      <ContactsList>
        {showError}
        {loadingIndicator}
        {contacts &&
          filteredContacts.map(({ id, name, number }) => {
            return <Contact key={id} id={id} name={name} number={number} />;
          })}
      </ContactsList>
    </div>
  );
};
