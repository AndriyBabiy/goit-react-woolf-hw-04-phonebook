import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  ContactsContainer,
  ContactsSearch,
  InputLabel,
} from './Contacts.styled';

export const Contacts = ({
  contacts,
  filter,
  inputChange,
  filterContacts,
  deleteContact,
}) => {
  return (
    <>
      <ContactsSearch>
        <InputLabel htmlFor="filter">Find contacts by name:</InputLabel>
        <input
          value={filter}
          onChange={inputChange}
          id="filter"
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactsSearch>
      <ContactsContainer>
        {contacts.length > 0 && filter.length > 0
          ? filterContacts.map(elem => (
              <ContactItem
                key={elem.id}
                elem={elem}
                deleteContact={deleteContact}
              />
            ))
          : contacts.map(elem => (
              <ContactItem
                key={elem.id}
                elem={elem}
                deleteContact={deleteContact}
              />
            ))}
      </ContactsContainer>
    </>
  );
};
