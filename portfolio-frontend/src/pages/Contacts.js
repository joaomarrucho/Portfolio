import React from 'react';
import '../styles/Contacts.css'; // Arquivo CSS para estilizar a página de contatos

const contactsData = [
  { name: 'João Marrucho', email: 'joaopaulomarrucho@gmail', phone: '(+351) 961 973 002' },
  { name: 'João Marrucho', email: 'up201804960@fc.up.pt', phone: '(+351) 961 973 002' },
];

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1>Contacts</h1>

      <div className="contacts-list">
        {contactsData.map((contact, index) => (
          <div className="contact-card" key={index}>
            <h2>{contact.name}</h2>
            <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p>Telefone: {contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
