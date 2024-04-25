import { Component } from 'react';
import {
  FormContainer,
  FormElement,
  FormLabel,
  FormSubmitButton,
} from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.submit({ name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <FormElement>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <input
            value={this.state.name}
            onChange={this.handleChange}
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
            value={this.state.number}
            onChange={this.handleChange}
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
  }
}

export default Form;
