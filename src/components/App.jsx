import { useEffect, useState } from "react";
import { Form } from './Form/Form';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Wrapper, Title, TitleFilter } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState('');

  const localStorageGetContacts = window.localStorage.getItem('contacts');
  useEffect(() => {
    if (localStorageGetContacts) {
      setContacts(JSON.parse(localStorageGetContacts));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(contacts, JSON.stringify(contacts));
  }, [contacts]);

  const createContact = (data) => {
    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      return alert(`${data.name} is already in contacts.`)
    }
    else {
      setContacts([...contacts, data]);
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  };

  const changeFilter = (e) => {
      setFiltered(e.currentTarget.value);
    };

    const getFiltredContacts = () => {
      const normalizedFilter = filtered.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter))
    };

    const filtredContacts = getFiltredContacts();

    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <Form onClickSubmit={createContact} contacts={contacts} />
        <TitleFilter>Contacts</TitleFilter>
        <Filter valueFilter={filtered} onChange={changeFilter} />
        <ContactList contacts={filtredContacts} onDeleteContact={deleteContact} />
      </Wrapper>
    )
  }