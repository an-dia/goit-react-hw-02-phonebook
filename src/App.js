import { Component } from 'react';
import shortid from 'shortid';

import Container from './components/Container';
import Title from './components/Title';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactForm/ContactsList';
import Filter from './components/Filter';

class App extends Component {
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
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else if (contact.name === '') {
      alert('Please enter your name');
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title title="Phonebook" level={1} />
        <ContactForm onSubmit={this.addContact} />
        <Title title="Contacts" level={2} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
