import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';

export default function Contacts(props) {
  const [contacts, setContacts] = useState([])
  let styles = {
    container: {
      backgroundColor: "lightblue",
      padding: "20px",
      maxWidth: "400px",
      margin: "0 auto",
      marginBottom: "20px"
    },
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/contacts')
      .then(res => res.json())
      .then(data => setContacts(data))
  })

  return (
    <div>
      {contacts.map((value, index) => {
        return (
          <div key={value.id} style={styles.container}>
            <p>{value.firstName + " " + value.lastName}</p>
            <p>{value.email}</p>
          </div>
        );
      })}
      <AddContact />
    </div>
  )
}