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
