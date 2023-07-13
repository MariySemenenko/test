import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Helmet } from 'react-helmet';
 import { Div, H2 } from '../components/StyledApp.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';

import {
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
//import { AppBar } from 'components/AppBar/AppBar';
//import HomePage from './HomePages';


export default function Contacts() {
  //додаю контакти з файлу  selectors.js
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //  console.log(contacts)

  return (
    <>
      <>
        <Div>
          {/* <AppBar /> */}
          <ContactForm />
          {isLoading && <p>Loading</p>}
          {error && <p>{error}</p>}
          <H2>Contacts {contacts.length}</H2>
          <Filter />
          {contacts.length ? <ContactList /> : <p>No contacts in phonebook</p>}
        </Div>
        {/* <HomePage /> */}
      </>
    </>
  );
}
