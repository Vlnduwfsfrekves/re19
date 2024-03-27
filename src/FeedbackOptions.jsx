import { useContext } from "react"
import { Context } from './App';
const FeedbackOptions = () => {
    const contextObj=useContext(Context)
    return(
    <div>
    <br/>
    <button onClick={()=>contextObj.changeGood(contextObj.good+1)}>Good</button>
    <button onClick={()=>contextObj.changeBad(contextObj.bad+1)}>Bad</button>
    <button onClick={()=>contextObj.changeNeutral(contextObj.neutral+1)}>Neutral</button>
    <br/>
    </div>
    )
}
export default FeedbackOptions