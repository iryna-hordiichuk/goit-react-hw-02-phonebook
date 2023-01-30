
// import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';
// import { Button } from 'components/ContactForm/ContactForm.styled';

export const ContactItem =  ({name, number}) =>  {
    return (
<Item>{name}:{number}</Item>
    )
};
