import { useState } from "react";

const List = ({contacts}) => {
  const [filterText, setFilterText] = useState('');
  const filteredContacts = contacts.filter((contact) => (
      contact.fullname.toLowerCase().includes(filterText.toLowerCase())
      
  ))

return(

    <div>
      <input placeholder="Filter Contact" 
        value={filterText} 
        onChange={(e) => setFilterText(e.target.value)}
       />
      <ul className="list">
        {filteredContacts.map((contact,i)=>(
        <li key={i}>
        <span>{contact.fullname}</span>
        <span>{contact.phone_number}</span></li>
        ))}
        <p>Total Contacts : {filteredContacts.length}</p>
      </ul>
       
    </div>
) 
}

export default List
