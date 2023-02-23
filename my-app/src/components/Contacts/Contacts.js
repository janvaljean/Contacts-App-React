import List from "./List/List"
import Form from "./Form/Form"
import { useState, useEffect } from "react"
import  "./Contact.css"


const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "John Doe",
      phone_number: "123-456-7890",

    },
    {
      fullname : "Jane Doe",
      phone_number : "5555555",
    },
    {
      fullname : "gary Fields",
      phone_number : "123-456-7890",

      
    }

  ])

useEffect (() => {
  console.log(contacts);

},[contacts])


  return (
    <div id="container">
    <h1>Contacts</h1>
      <List contacts = {contacts}/>
      <Form addContact = {setContacts} contacts={contacts}/>

    </div>
  )
}

export default Contacts
