import React, { Component } from 'react';
import Form from '../components/Form';
import Contacts from '../components/Contacts';
import Filter from '../components/Filter';

class ContactsView extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;
  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  //   addContact = ({ name, number }) => {
  //     const contact = {
  //       id: uuidv4(),
  //       name: name,
  //       number: number,
  //     };

  //     if (name !== '' && number !== '') {
  //       const namesArr = this.state.contacts.map(({ name }) => name);
  //       if (namesArr.includes(contact.name)) {
  //         alert('Contact already exist');
  //         return;
  //       }
  //       this.setState(({ contacts }) => ({
  //         contacts: [contact, ...contacts],
  //       }));
  //     }
  //   };

  //   deleteContact = id => {
  //     const { contacts, filteredContacts } = this.state;

  //     this.setState({
  //       contacts: contacts.filter(contact => contact.id !== id),
  //       filteredContacts: filteredContacts.filter(contact => contact.id !== id),
  //     });
  //   };

  // onInputFilter = filter => {
  //   const contacts = this.state.contacts;

  //   const filteredContacts = contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase()),
  //   );

  //   this.setState({ filteredContacts: filteredContacts, filter: filter });
  // };

  render() {
    return (
      <>
        <h2 className="Title">Phonebook</h2>
        <Form></Form>

        <h2 className="Title">Contacts</h2>
        <Filter></Filter>

        <Contacts></Contacts>
      </>
    );
  }
}

export default ContactsView;
