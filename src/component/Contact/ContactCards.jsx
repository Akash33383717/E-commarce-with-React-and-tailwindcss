import React, { useEffect, useState } from 'react'
import { FiMapPin } from 'react-icons/fi'

const ContactCards = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('/ContactDetails.json')
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="grid md:grid-cols-3 gap-8">
        {contacts.map(contact => (
          <div 
            key={contact.id} 
            className="bg-white shadow rounded-lg p-6"
          >
            <h2 className="text-xl font-bold mb-2 hover:text-green-400 transition-colors">
              {contact.title}
            </h2>
            
            <p className="text-gray-600">{contact.address}</p>
            <p className="text-gray-600">{contact.city}</p>
            <p className="text-gray-600">Phone: {contact.phone}</p>
            <p className="text-gray-600">Email: {contact.email}</p>
            
            <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600/50 transition-colors">
              <FiMapPin className="text-white" />
              {contact.map}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactCards;
