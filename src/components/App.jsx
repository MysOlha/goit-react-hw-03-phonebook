import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Form from './Form';

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

  componentDidMount() {
    this.allContactsFromLS();
    // const allContacts = JSON.parse(localStorage.getItem('contacts'));
    // if (allContacts) {
    //   this.setState({ contacts: allContacts });
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  allContactsFromLS = () => {
    try {
      return this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
      });
    } catch (error) {
      return [];
    }
  };

  onAddContact = newName => {
    if (
      this.state.contacts.some(
        ({ name }) =>
          name === newName.name ||
          name.toLowerCase() === newName.name.toLowerCase()
      )
    ) {
      toast.error(`${newName.name} is alredy in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({ contacts: [...contacts, newName] }));
  };

  onFilterContact = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getContactList = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onRemoveContact = idContact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== idContact
        ),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <h1
          style={{
            marginTop: '25px',
            textAlign: 'center',
            color: 'rgb(145, 122, 122)',
          }}
        >
          Phonebook
        </h1>
        <Form addToContact={this.onAddContact} />

        <h2
          style={{
            marginTop: '20px',
            textAlign: 'center',
            color: 'rgb(145, 122, 122)',
          }}
        >
          Contacts:
        </h2>

        {contacts.length !== 0 && (
          <Filter value={filter} filterContacts={this.onFilterContact} />
        )}

        {contacts.length !== 0 && (
          <Contacts
            contacts={this.getContactList()}
            onRemove={this.onRemoveContact}
          />
        )}

        <ToastContainer />
      </>
    );
  }
}

export default App;
