import Li from './Li'
import { useContext } from 'react'
import { Context } from './App'
const Render=()=>{
    const contextObj=useContext(Context)
    const filterA=contextObj.contacts.filter(contact=>contact.name.toLowerCase().startsWith(contextObj.filter.toLowerCase()))
    return(
        <ul>
        {filterA.map((item,index)=>(
            <Li item={item} index={index}/>
        ))}
        </ul>    
    )
}
export default Render