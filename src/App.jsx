import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { FormAddContacts } from 'components/Form/Form';

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

  handleAddContact = (contact, formReset) => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };
    const isContact = this.state.contacts.some(
      obj =>
        obj.name.trim().toLowerCase() === newContact.name.trim().toLowerCase()
    );
    if (isContact) {
      alert(`${newContact.name} is already in contacts!`);

      formReset();
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    formReset();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleDeleteContact = event => {
    const contactId = event.target.id;
    const newContacts = this.state.contacts.filter(
      ({ id }) => id !== contactId
    );
    this.setState({ contacts: newContacts });
  };
  filteredContacts = () =>
    this.state.contacts.filter(
      ({ name }) =>
        !this.state.filter ||
        name.toLowerCase().includes(this.state.filter.trim().toLowerCase())
    );

  render() {
    return (
      <div className="phone_book">
        <h1>Phone Book</h1>
        <FormAddContacts handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter state={this.state} handleChange={this.handleChange} />
        <ContactsList
          contacts={this.filteredContacts()}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
