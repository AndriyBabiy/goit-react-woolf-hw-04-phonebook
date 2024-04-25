import Form from 'components/Form/Form';
import { Container } from './App.styled';
import { Component } from 'react';
import { ComponentHeading } from 'components/ComponentHeading/ComponentHeading';
import { Contacts } from 'components/Contacts/Contacts';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');

    if (localData) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  createNewContact = newContact => {
    if (this.state.contacts.find(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [{ id: uuidv4(), ...newContact }, ...contacts],
      }));
    }
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(elem => elem.id !== id),
    }));
  };

  handleFilter = () => {
    const contacts = [...this.state.contacts];

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <Container>
        <ComponentHeading size="xlarge" text={'Phonebook'} />
        <Form submit={this.createNewContact} />
        <ComponentHeading size="xlarge" text={'Contacts'} />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          inputChange={this.handleChange}
          filterContacts={this.handleFilter()}
          deleteContact={this.handleDelete}
        />
      </Container>
    );
  }
}

export default App;
