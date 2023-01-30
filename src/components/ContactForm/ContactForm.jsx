import { Component } from 'react';
import {
  ContactForm,
  ContactInput,
  ContactLabel,
  SubmitButton,
} from './ContactForm.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  //! Для всех инпутов создаем один обработчик
  //! Различать инпуты будем по атрибуту name
  // Значення атрибуту/пропа name таке ж як полів в стейт
  // here we use square brackets notation - namely computed object properties;
  onChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number); 
    // забрало обєкт стейта і передало наверх через пропс в АПП.
    // обєкт стейта буде доступний в асинхронному коді
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' }); // передали обєкт чистого стейта
  };

  render() {
    return (
      <ContactForm onSubmit={this.handleSubmit}>
        <ContactLabel>
          Name
          <ContactInput
            type="text"
            name="name"
            placeholder="first name and surname"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onChange}
          />
        </ContactLabel>

        <ContactLabel>
          Number
          <ContactInput
            type="tel"
            name="number"
            placeholder="telephone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onChange}
          />
        </ContactLabel>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </ContactForm>
    );
  }
}
