import {
  ContactDetails,
  ContactText,
  DeleteButton,
} from './ContactItem.styled';

export const ContactItem = ({ elem: { id, name, number }, deleteContact }) => {
  return (
    <ContactDetails>
      <ContactText>
        ☎︎ {name}: {number}
      </ContactText>
      <DeleteButton onClick={() => deleteContact(id)}>
        Delete contact
      </DeleteButton>
    </ContactDetails>
  );
};
