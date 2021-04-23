import React, { useState, useEffect } from "react";

export default function AddContact(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = (event) => {
    event.preventDefault()

    let contact = {
      firstName: firstName,
      lastName: lastName,
      email: email
    }

    fetch("http://localhost:8080/api/contacts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(contact)
    })
      .then(res => res.json())
    
    window.location.reload()
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
          ></input>
          <label>First Name</label>
        </div>
        <div>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
          ></input>
          <label>Last Name</label>
        </div>
        <div>
          <input
            placeholder="name@provider.com"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          ></input>
          <label>Email</label>
        </div>
        <div>
          <button type="submit" name="action">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
