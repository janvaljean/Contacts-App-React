import { useState } from "react"

const initialValue = {fullname: "", phone_number : ""}

const Form = (addContact ,contacts) => {
    const [form, setForm] = useState(initialValue)
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
        
    }
    const onSubmit = (e) => {
      e.preventDefault();
      if (form.fullname === "" || form.phone_number === "") {
        return false
        //invalid input
      }
      addContact([...contacts, form])
      setForm(initialValue)


    }
    // form has endpoint so page is rendered

  return (
    <form onClick={onSubmit}>

        <div><input name="fullname" placeholder="Fullname" onChange={onChangeInput} value={form.fullname}/>
        </div>
        <div><input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} value={form.phone_number}/>
        </div>
        <div>
            <button onClick={onSubmit}>Add</button>
        </div>

      
      
    </form>
  )
}

export default Form
