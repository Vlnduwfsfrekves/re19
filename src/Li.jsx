import { useContext } from 'react'
import { Context } from './App'
const Li=({item,index})=>{
    const contextObj=useContext(Context)
    return(
        <li key={index}>
        {`${item.name} ${item.number}`}
        <button onClick={()=>contextObj.deleteContact(index)}>Delete</button>
        </li>
    )
}
export default Li