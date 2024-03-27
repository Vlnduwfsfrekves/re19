import { useContext } from "react"
import { Context } from './App';
const Filter=()=>{
    const contextObj=useContext(Context)
    return(
        <label>
        Filter by first letter:
        <br/>
        <input
        type="text"
        name="filterLetter"
        value={contextObj.filter}
        onChange={(e)=>contextObj.setFilterLetter(e.currentTarget.value)}
        />
        </label>
    )
}
export default Filter