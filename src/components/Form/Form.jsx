import { useState } from 'react';
import {
  FormContainer,
  FormElement,
  FormLabel,
  FormSubmitButton,
} from './Form.styled';

const Form = ({ submit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    submit({ name: name, number: number });
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormElement>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <input
          value={name}
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormElement>
      <FormElement>
        <FormLabel htmlFor="number">Number:</FormLabel>
        <input
          value={number}
          onChange={handleChange}
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormElement>
      <FormSubmitButton type="submit">Add contact</FormSubmitButton>
    </FormContainer>
  );
};

export default Form;
