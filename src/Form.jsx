import { useContext,useRef } from "react"
import { nanoid } from "nanoid";
import { Context } from './App';
import {Div,Button} from './App.styled'
const Form=()=>{
    const contextObj=useContext(Context)
    const input=useRef(null)
    const add=()=>{
        if(contextObj.name.trim()==='' || contextObj.number.trim()===''){
            input.current.focus()
        }else if(!contextObj.contacts.some(contact=>contact.name===contextObj.name.trim()) && !contextObj.contacts.some(contact=>contact.number===contextObj.number.trim())){
            contextObj.changeContacts([...contextObj.contacts,{name:contextObj.name,number:contextObj.number,id:nanoid()}])
        }else{
            alert('you need to change this contact because you already have this contact')
        }
    }
    return(
        <Div>
        <h3>Name</h3>
        <label>
        <input
        type="text"
        ref={input}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={contextObj.name}
        onChange={contextObj.getName}
        />
        </label>
        <h3>Number</h3>
        <label>
        <input
        type="tel"
        name="number"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={contextObj.number}
        onChange={contextObj.getNumber}
        />
        </label>
        <br/>
        <label>
        <Button><button onClick={add}>Add contact</button></Button>
        </label>
        </Div>
    )
}
export default Form