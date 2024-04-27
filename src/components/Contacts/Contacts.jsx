import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactsContainer } from './Contacts.styled';

export const Contacts = ({ filterContacts, deleteContact }) => {
  return (
    <>
      <ContactsContainer>
        {filterContacts.map(elem => (
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
