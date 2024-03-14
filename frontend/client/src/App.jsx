import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import DisplayContacts from './components/DisplayContacts';

function App() {
  const [contacts, setContacts] = useState([]);

  const handleSubmit = (contact) => {
    console.log('Submitting contact:', contact);
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App bg-white min-h-screen">
      <h1 className="text-3xl font-bold underline text-orange-500 text-center py-4">Contact Book</h1>
      <ContactForm onSubmit={handleSubmit} />
      <DisplayContacts contacts={contacts} />
    </div>
  );
}

export default App;