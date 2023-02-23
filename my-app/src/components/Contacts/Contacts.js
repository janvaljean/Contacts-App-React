import List from "./List/List"
import Form from "./Form/Form"
import { useState } from "react"


const Contacts = () => {
  const [contacts, setContacts] = useState([])


  return (
    <div>
      <List/>
      <Form addContact = {setContacts} contacts={contacts}/>

    </div>
  )
}

export default Contacts
