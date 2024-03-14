import React, { useEffect, useState } from 'react';

function DisplayContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/contacts')
      .then(response => response.json())
      .then(data => setContacts(data));
      // console.log(data);
  }, []);
 

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
    {contacts.map((contact, index) => (
      <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-orange-100 border-orange-500">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-orange-700">{contact.firstName} {contact.lastName}</div>
          <p className="text-orange-700 text-base">
            Email: {contact.email}
          </p>
          <p className="text-orange-700 text-base">
            Phone 1: {contact.phoneNumber1}
          </p>
          <p className="text-orange-700 text-base">
            Phone 2: {contact.phoneNumber2}
          </p>
          <p className="text-orange-700 text-base">
            Address: {contact.address}
          </p>
          {/* You can add more contact details here if needed */}
        </div>
      </div>
    ))}
  </div>
  );
}

export default DisplayContacts;

