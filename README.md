  This is a Phonebook application, it allows to add, delete and filter contacts.
It uses a controlled form written in vanilla ReactDOM. 
ContactForm's state is located in the ContactForm component. 
It has two fields: name and number. Method onChange is used to
update ContactForm's state. 
App component has its own state. Method addContact accepts an object with values
passed from the ContactForm component, thus state in the App component is updated (setState method with call-back function is used);

User notifications are delivered using Notiflix library.
Icons are implemented using react-icons library. 
Styling is implemented using styled-components and Styled System.