import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Wrapper, MainTitle, SecondaryTitle } from './App.styled';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
      <Toaster />
    </Wrapper>
  );
};
