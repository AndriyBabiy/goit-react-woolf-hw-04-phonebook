import Form from 'components/Form/Form';
import { Container } from './App.styled';
import { useEffect, useState } from 'react';
import { ComponentHeading } from 'components/ComponentHeading/ComponentHeading';
import { Contacts } from 'components/Contacts/Contacts';
import { v4 as uuidv4 } from 'uuid';
import {
  ContactsSearch,
  InputLabel,
} from 'components/Contacts/Contacts.styled';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || INITIAL_STATE.contacts
  );
  const [filter, setFilter] = useState(INITIAL_STATE.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'filter') setFilter(value);
  };

  const createNewContact = newContact => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [
        { id: uuidv4(), ...newContact },
        ...prevContacts,
      ]);
    }
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(elem => elem.id !== id));
  };

  const handleFilter = () => {
    const contact_list = [...contacts];

    return contact_list.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <ComponentHeading size="xlarge" text={'Phonebook'} />
      <Form submit={createNewContact} />
      <ContactsSearch>
        <InputLabel htmlFor="filter">Find contacts by name:</InputLabel>
        <input
          value={filter}
          onChange={handleChange}
          id="filter"
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactsSearch>
      <ComponentHeading size="xlarge" text={'Contacts'} />
      <Contacts filterContacts={handleFilter()} deleteContact={handleDelete} />
    </Container>
  );
};

export default App;
