// ContactForm.js
import React, { useState } from 'react';

function ContactForm({ onSubmit }) {
  const [contact, setContact] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber1: '',
    phoneNumber2: '',
    address: ''
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto my-10">
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="firstName"
        value={contact.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
    </div>
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="middleName"
        value={contact.middleName}
        onChange={handleChange}
        placeholder="Middle Name"
      />
    </div>
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="lastName"
        value={contact.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
    </div>
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
      />
    </div>
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="phoneNumber1"
        value={contact.phoneNumber1}
        onChange={handleChange}
        placeholder="Primary Phone Number"
      />
    </div>
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="phoneNumber2"
        value={contact.phoneNumber2}
        onChange={handleChange}
        placeholder="Secondary Phone Number"
      />
    </div>
    <div className="mb-4">
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="address"
        value={contact.address}
        onChange={handleChange}
        placeholder="Address"
      />
    </div>
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  </form>
  );
}

export default ContactForm;