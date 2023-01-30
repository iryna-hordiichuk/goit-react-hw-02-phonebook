// import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ( {contacts} ) => {
    console.log(contacts);
  return (
    <List>
      {contacts.map(({id,name,number} )=> (
        <ContactItem key={id} name={name} number={number}> </ContactItem>
      ))}
    </List>
  );
};
