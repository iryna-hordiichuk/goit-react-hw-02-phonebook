import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/Contactlist';
import {Form} from 'components/ContactForm';
import {Filter} from 'components/Filter';
// import { Notify } from 'notiflix';
// import {MdContactPhone } from 'react-icons/md';

import { Container } from 'components/Container/Container.jsx';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContact = (name, number) => {
    const id = nanoid();
    const newContact = { name, number, id }; //Property value shorthand 
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getFilteredContacts;
    return (
      <Container as="main">
        <Container
          as="div"
          maxWidth={1250}
          pl={15}
          pr={15}
          ml={'auto'}
          mr={'auto'}
        >
          <h2>Phonebook</h2>
          <Form onSubmit={this.addContact}/>
          <h2>Contacts</h2>
          <h3> Find contacts by Name</h3>
          <Filter value={this.state.filter} onChange={this.changeFilter}/>
          <ContactList contacts={visibleContacts}/>
        </Container>
      </Container>
    );
  }
}
