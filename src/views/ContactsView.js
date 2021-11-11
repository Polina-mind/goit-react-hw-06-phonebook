import React from 'react';
import Form from '../components/Form';
import Contacts from '../components/Contacts';
import Filter from '../components/Filter';

const ContactsView = () => (
  <>
    <h2 className="Title">Phonebook</h2>
    <Form></Form>

    <h2 className="Title">Contacts</h2>
    <Filter></Filter>

    <Contacts></Contacts>
  </>
);

export default ContactsView;
