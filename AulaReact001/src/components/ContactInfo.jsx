import React from 'react';

export default function ContactInfo(props) {
  return (
    <div className="contact-info">
      <h3>Contato</h3>
      <ul>
        <li>Email: {props.email}</li>
        <li>Telefone: {props.phone}</li>
        <li>LinkedIn: {props.linkedin}</li>
      </ul>
    </div>
  );
}
